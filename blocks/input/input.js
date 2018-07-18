import Block from '../block';
import template from './input.pug';
import style from './input.css';

export default class Input extends Block {

    get name() {
        return 'div';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({placeholder, type = 'text', value = ''}) {
        super();

        this.el.classList.toggle('input', true);

        this.el.innerHTML = template({
            placeholder: placeholder,
            value: value,
            type: type
        });

        // TODO поправить по БЭМ
        this.input = this.el.querySelector('input');
        this.input.addEventListener('input', event => this.onInput(event));
    }

    get enteredValue(){
        return this.input.value;
    }

    showValid() {
        this.input.style.borderColor = 'green';
    }

    showInvalid() {
        this.input.style.borderColor = 'red';
    }
    /**
     * @override
     */
    onInput(event) {

    }

}
