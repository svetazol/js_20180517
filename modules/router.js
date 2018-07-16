export default class Router {

    constructor() {
        this.routes = {};
    }

    /**
     * Добавить новый маршрут
     * @param {string} path - маршрут
     * @param {Function} fn - функция коллбек
     */
    route(path, fn) {
        this.routes[path] = fn;
        return this;
    }

    _onRoute(path) {
        path = path.replace('#', '');

        let fn = this.routes[path];

        if (fn) {
            fn();
        }

    }

    start() {

        window.addEventListener('hashchange', () => {
            this._onRoute(location.hash);
        });

        this._onRoute(location.hash);
    }


}