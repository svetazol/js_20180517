import List from '../../blocks/list/list';
import View from '../view';
import style from './users.scss';
import template from './users.pug';

export default class UsersView extends View {

    get bemName() {
        return 'users-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.list = new List([
            {name: 'Маша Петрова', id: 1},
            {name: 'Петя Иванов', id: 2},
            {name: 'Саша', id: 3},
            {name: 'Таня', id: 4}
        ]);
        this.addBlock('list', this.list);
    }

}