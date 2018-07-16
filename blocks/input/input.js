import Block from '../block';
import template from './input.pug';

export default class Input extends Block {

    get name () {
        return 'div';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({ placeholder, type = 'text', value='' }) {
        super();

        this.el.classList.toggle('input', true);
        this.el.innerHTML=template({
            placeholder:placeholder,
            value:value,
            type:type
        });

    }

}
