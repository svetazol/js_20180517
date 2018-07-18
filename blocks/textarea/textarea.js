import Block from '../block';
import template from './textarea.pug';
import style from './textarea.css';

export default class Textarea extends Block {

    get name() {
        return 'div';
    }

    /**
     * Input
     * @param {Object} obj

     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.value] - значение инпута (по умолчанию пустая строка)
     */
    constructor({placeholder, value = ''}) {
        super();

        this.el.classList.toggle('textarea', true);
        this.el.innerHTML = template({
            placeholder: placeholder,
            value: value
        });
        this.textarea = this.el.querySelector('.item__textarea');
        this.textarea.addEventListener('keydown', e => this.onKeyDown(e))
    }

    get value() {
        return this.textarea.value;
    }

    clearValue() {
        return this.textarea.value = null;
    }

    /**
     * @override
     */
    onKeyDown(event) {

    }

}

