import Block from '../block';
import template from './input.pug';
import style from './input.css';

export default class Input extends Block {

    get name() {
        return 'div';
    }

    get baseName() {
        return 'input';
    }

    get invalidFieldClass(){
        return `${this.baseName}_invalid`
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({placeholder, type = 'text', value = ''}) {
        super();

        this.el.classList.toggle(this.baseName, true);

        this.el.innerHTML = template({
            placeholder: placeholder,
            value: value,
            type: type
        });

        // TODO поправить по БЭМ
        this.input = this.el.querySelector(this.baseName);
        this.input.addEventListener('input', event => this.onInput(event));
    }

    get enteredValue(){
        return this.input.value;
    }

    showValid() {
        this.input.classList.toggle(this.invalidFieldClass, false)
    }

    showInvalid() {
        this.input.classList.toggle(this.invalidFieldClass, true)
    }
    /**
     * @override
     */
    onInput(event) {

    }

}
