import TextArea from '../../blocks/textarea/textarea';
import Messages from '../../blocks/messages/messages';
import View from '../view';
import style from './chat.scss';
import template from './chat.pug';

export default class ChatView extends View {

    get bemName() {
        return 'chat-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.messages = new Messages([]);

        this.textarea = new TextArea({
            placeholder: 'Введите сообщение и нажмите shift+enter'
        });

        this
            .addBlock('messages', this.messages)
            .addBlock('textarea', this.textarea);

        this.textarea.onSend = (e) => {
            this.messages.append({
                text: this.textarea.value,
                time: new Date().toString().split(" ")[4],
                style: 'sent',
                user: 'you'
            });
            e.preventDefault();
            this.textarea.clearValue();
        };
    }

}