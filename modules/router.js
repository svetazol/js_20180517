import User from "../models/user";

export default class Router {

    constructor() {
        this.routes = {};
        this.currentUser = new User();
    }

    /**
     * Добавить новый маршрут
     * @param {string} path - маршрут
     * @param {View} view - вьюха которая должна быть показана по маршруту
     * @param {bool} need_auth - нужна ли авторизация
     */
    route(path, view, need_auth) {
        this.routes[path] = {view, need_auth};
        return this;
    }

    _onRoute(path) {
        path = path.replace('#', '');

        let {view, need_auth} = this.routes[path];

        if (need_auth) {
            if (!this.currentUser.checkAuth()) {
                return
            }
        }

        if (this.current) {
            this.current.hide();
        }

        if (view) {
            view.show();
            this.current = view;
        }

    }

    start() {

        window.addEventListener('hashchange', () => {
            this._onRoute(location.hash);
        });

        this._onRoute(location.hash);
    }


}