import List from '../../blocks/list/list';
import View from '../view';
import User from '../../models/user';
import style from './users.scss';
import template from './users.pug';

export default class UsersView extends View {

    get bemName() {
        return 'users-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.currentUser = new User();

        this.list = new List([]);
        this.addBlock('list', this.list);
    }

    show() {
        this.currentUser.list(
        ).then(result => {
                this.updateList(result);
                super.show();
            }
        ).catch(error => {
            alert(`Getting users failed:  ${error.statusText}, ${error.responseText}`);
        })
    }

    updateList(newData) {
        let newList = new List(newData);
        this.list.el.replaceWith(newList.el);
        this.list = newList;
    }

}