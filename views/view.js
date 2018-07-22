export default class View {

    constructor({el}) {
        this.el = el;
        this.hide();

        this.el.addEventListener('submit', event => this.onSubmit(event));
    }

    render(template) {
        this.el.innerHTML = template();
    }

    show() {
        this.el.hidden = false;
    }

    hide() {
        this.el.hidden = true;
    }

    addBlock(name, block) {
        this.el.querySelector(`.${this.bemName}__${name}`).appendChild(block.el);
        return this;
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.processSubmit();
        }
    }

    isValid() {
        throw new Error('Not implemented isValid');
    }

    isNotEmpty(fields) {
        let isNotEmpty = true;
        for (let field of fields) {
            if (!this[field].value) {
                this[field].showInvalid();
                isNotEmpty = false;
            }
            else {
                this[field].showValid();
            }
        }
        return isNotEmpty;
    }

    processSubmit() {
        throw new Error('Not implemented processSubmit');
    }


}