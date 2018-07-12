import Button from './blocks/button/button';
import Input from './blocks/input/input';
import List from './blocks/list/list';
import Messages from './blocks/messages/messages';
import Textarea from './blocks/textarea/textarea';


window.addEventListener('DOMContentLoaded', function () {

    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    let list = new List({
        user: ['Маша', 'Петя', 'Саша', 'Таня']
    });

    let messages  = new Messages({
        text: 'Тестовый текст сообщения'
    });

    let messagesSent  = new Messages({
        text: 'Тестовый текст сообщения',
        style: 'sent'
    });

    let textarea  = new Textarea({
        placeholder: 'Тестовая текстареа'
    });



    button.append(document.body);
    input.append(document.body);
    list.append(document.body);
    messages.append(document.body);
    messagesSent.append(document.body);
    textarea.append(document.body);
});


