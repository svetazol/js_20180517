import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './login.scss';
import template from './login.pug';
import User from "../../models/user";

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

        this.user = new User();

        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('submit', this.button);
    }

    isValid() {
        return this.isNotEmpty(['name', 'pwd']);

    }

    processSubmit() {
        this.user.login(
            this.name.value,
            this.pwd.value
        ).then(user => {
            location.hash = '#chat'
        }, error => {
            alert(`Login failed: ${error.statusText}, ${error.responseText}`);
        });

    }

}