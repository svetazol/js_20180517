import Block from '../block';

import template from './list.pug';
import style from './list.css';


export default class List extends Block {

    get name () {
        return 'ul';
    }

    /**
     * Input
     * @param {array} obj.users - массив объектов пользователей
     *
     */
    constructor(users) {
        super();
        let list='';
        for (let u of users){
            list+=template({
                name: u.name,
                id: u.id
            });
        }
        this.el.innerHTML=list;
        this.el.classList.toggle('list', true);

    }

}

