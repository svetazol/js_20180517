import Block from '../block';

export default class Textarea extends Block {

    get name () {
        return 'textarea';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({ placeholder, value='' }) {
        super();

        this.el.classList.toggle('textarea', true);
        this.el.placeholder = placeholder;
        this.el.value = value;
    }

}