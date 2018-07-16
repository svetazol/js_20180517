import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './signup.scss';
import template from './signup.pug';

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


        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('pwd-repeat', this.pwdRepeat)
            .addBlock('submit', this.button);
    }

}