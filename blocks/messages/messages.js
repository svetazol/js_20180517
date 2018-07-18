import Block from '../block';
import template from './messages.pug';
import style from './messages.css';

export default class Messages extends Block {

    get name() {
        return 'div';
    }

    /**
     * Кнопка
     * @param {Object} messages - список сообщений.
     * Где сообщение - объект со следующими ключами: text, style, user, time
     */
    constructor(messages) {
        super();
        this.scrollDiv = document.createElement('div');
        this.scrollDiv.classList.toggle('item__scroll');
        messages.map(item=>this.append(item));
        this.el.appendChild(this.scrollDiv);
        this.el.classList.toggle('messages');

    }

    append(message) {
        this.scrollDiv.insertAdjacentHTML('beforeend', template(message))
    }

}
