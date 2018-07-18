import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './login.scss';
import template from './login.pug';

export default class LoginView extends View {

    get bemName() {
        return 'login-view';
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

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });

        this.pwd.onInput = function (event) {
            console.log(event);
        };

        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('submit', this.button);

        this.el.addEventListener('submit', event => this.onSubmit(event));
    }

    onSubmit(event) {
        if (this.isValid()) {
            this.loginSuccess();
        }
        else {
            this.loginFail(event);
        }
    };

    isValid() {
        let fields = ['name', 'pwd'];
        for (let field of fields) {
            if (!this[field].enteredValue) {
                this[field].showInvalid();
                return false;
            }
            this[field].showValid();
        }
        return true;
    }

    loginSuccess() {
        console.log('logged in:', this.name.enteredValue, this.pwd.enteredValue);
    }


    loginFail(event) {
        event.preventDefault();
    }

}