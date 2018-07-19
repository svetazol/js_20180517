export default class View {

    constructor({ el }) {
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
        if (this.isValid()) {
            this.successSubmit();
        }
        else {
            this.failSubmit(event);
        }
    }
    isValid(){
        throw new Error('Not implemented isValid');
    }

    isNotEmpty(fields) {
        let isNotEmpty = true;
        for (let field of fields) {
            if (!this[field].enteredValue) {
                this[field].showInvalid();
                isNotEmpty = false;
            }
            else {
                this[field].showValid();
            }
        }
        return isNotEmpty;
    }

    successSubmit() {
        throw new Error('Not implemented successSubmit');
    }


    failSubmit(event) {
        event.preventDefault();
    }



}