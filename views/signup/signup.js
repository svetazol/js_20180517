import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './signup.scss';
import template from './signup.pug';
import User from '../../models/user';

export default class SignupView extends View {

    get bemName() {
        return 'signup-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.name = new Input({
            placeholder: 'Имя'
        });

        this.pwd = new Input({
            placeholder: 'Пароль',
            type: 'password'
        });

        this.pwdRepeat = new Input({
            placeholder: 'Повтор пароля',
            type: 'password-repeat'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });

        this.user = new User();

        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('pwd-repeat', this.pwdRepeat)
            .addBlock('submit', this.button);

    }

    isValid() {
        if (!this.isNotEmpty(['name', 'pwd', 'pwdRepeat'])) {
            return false;
        }
        if (this.pwd.enteredValue !== this.pwdRepeat.enteredValue) {
            this.pwd.showInvalid();
            this.pwdRepeat.showInvalid();
            return false;
        }
        this.pwd.showValid();
        this.pwdRepeat.showValid();
        return true;
    }

    successSubmit() {
        this.user.signup(
            this.name.getValue(),
            this.pwd.getValue(),
            this.pwdRepeat.getValue()
        ).then(user => {
            console.log(user);
            location.hash = '#chat'
        }, error => {
            alert('ERROR');
        });

    });
    }

}