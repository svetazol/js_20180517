import Block from '../block';

export default class Messages extends Block {

    get name() {
        return 'div';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст сообщения
     * @param {string} obj.style - стиль сообщения received, sent
     */
    constructor({ text, style = 'received' }) {
        super();

        this.el.innerText = text;
        this.el.classList.toggle('messages');
        this.el.classList.add(style);
    }
}
