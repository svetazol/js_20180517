import Block from '../block';

export default class List extends Block {

    get name () {
        return 'ul';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {array} obj.user - массив пользователей,
     *
     */
    constructor({ user }) {
        super();
        let list='';
        for (let li of user){
            list+=`<li>${li}</li>`;
        }
        this.el.innerHTML=list;
        this.el.classList.toggle('list', true);

    }

}