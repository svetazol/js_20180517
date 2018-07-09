export default class Block {

    get name() {
        throw new Error('Invalid component name');
    }

    constructor() {
        this.el = document.createElement(this.name);
    }

    /**
     * Вставка элемента на старинцу
     * @param {Element} root - родительский элемент
     */
    append(root) {
        root.appendChild(this.el);
    }
}

