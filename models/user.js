const BASE_URL = 'https://murmuring-cove-73426.herokuapp.com/users';

let currentUser = null;

export default class User {
    constructor() {
        if (currentUser) {
            return currentUser;
        }
        this.userId = null;
        this.name = null;
        this.auth = null;
        currentUser = this;
    }

    /**
     * @param method
     * @param url
     * @param body
     * @param auth_header
     */
    request(method, url, body = {}, auth_header = null) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open(method, BASE_URL + url);

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status > 299) {
                    reject(xhr);
                    return;
                }

                resolve(xhr.responseText);
            });

            if (auth_header) {
                xhr.setRequestHeader('Authorization', auth_header);
            }
            xhr.send(JSON.stringify(body));
        });
    }

    login(login, password) {
        return new Promise((resolve, reject) => {
            this.request('POST', '/login', {
                login,
                password
            }).then(response => {
                let userData = JSON.parse(response);
                if (userData.status !== 'ok') {
                    reject({'status': userData.status})
                }
                this.name = login;
                this.userId = userData.userId;
                this.auth = userData.auth;
                resolve();
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        });

    }

    signup(login, password, passwordRepeat) {
        return new Promise((resolve, reject) => {
            this.request('POST', '/signup', {
                login,
                password,
                passwordRepeat
            }).then(response => {
                let userData = JSON.parse(response);
                if (userData.status !== 'ok') {
                    reject({'status': userData.status})
                }
                this.name = login;
                this.userId = userData.userId;
                this.auth = userData.auth;
                resolve();
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }

    list() {
        return new Promise((resolve, reject) => {
            this.checkAuth();
            this.request('GET', '', {}, this.auth
            ).then(response => {
                let listData = JSON.parse(response);
                resolve(listData);
            }).catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }

    checkAuth() {
        if (!this.auth) {
            alert('User must be authenticated');
            location.hash = '#login';
            return false;
        }
        return true;
    }

}