import Button from './blocks/button/button';
import Input from './blocks/input/input';
import List from './blocks/list/list';
import Messages from './blocks/messages/messages';
import Textarea from './blocks/textarea/textarea';


window.addEventListener('DOMContentLoaded', function () {

    let buttonEnter = new Button({
        text: 'Войти'
    });

    let buttonReg = new Button({
        text: 'Регистрация'
    });

    let buttonRegHref = new Button({
        text: 'Регистрация',
        style: 'button__href'
    });
    let buttonLogin = new Button({
        text: 'Логин',
        style: 'button__href'
    });

    let inputName = new Input({
        placeholder: 'Имя'
    });

    let inputPassword = new Input({
        placeholder: 'Пароль'
    });

    let inputName2 = new Input({
        placeholder: 'Имя'
    });

    let inputPassword2 = new Input({
        placeholder: 'Пароль'
    });

    let inputRetryPassword = new Input({
        placeholder: 'Повтор пароля'
    });

    let list = new List({
        user: [{name:'Маша Петрова',id:1}, {name:'Петя Иванов',id:2}, {name:'Саша',id:3}, {name:'Таня',id:4}]
    });


    let messages  = new Messages({
        message:[
            {
                text: 'Тестовый текст',
                user: 'Маша Петрова',
                time: '10:30',
                style: 'received'
            },
            {
                text: 'Тестовый текст сообщения',
                user: 'Петя Иванов',
                time: '12:30',
                style: 'sent'
            },
            {
                text: 'Длинный тестовый текст сообщения Длинный тестовый текст сообщения Длинный тестовый текст сообщения ',
                user: 'Маша Петрова',
                time: '12:40',
                style: 'received'
            },
            {
                text: 'Тест',
                user: 'Петя Иванов',
                time: '12:45',
                style: 'sent'
            },
            {
                text: 'Тестовый текст сообщения',
                user: 'Петя Иванов',
                time: '12:53',
                style: 'sent'
            }

        ]
    });


    let textarea  = new Textarea({
        placeholder: 'Тестовая текстареа'
    });



    inputName.append(document.querySelector('.registrationWindow'));
    inputPassword.append(document.querySelector('.registrationWindow'));
    buttonEnter.append(document.querySelector('.registrationWindow'));
    buttonRegHref.append(document.querySelector('.registrationWindow'));


    inputName2.append(document.querySelector('.loginWindow'));
    inputPassword2.append(document.querySelector('.loginWindow'));
    inputRetryPassword.append(document.querySelector('.loginWindow'));
    buttonReg.append(document.querySelector('.loginWindow'));
    buttonLogin.append(document.querySelector('.loginWindow'));

    messages.append(document.querySelector('.chatWindow'));
    let scrollDiv=messages.el.querySelector('.item__scroll');
    scrollDiv.scrollTop=scrollDiv.scrollHeight;
    textarea.append(document.querySelector('.chatWindow'));

    list.append(document.querySelector('.userWindow'));




});
