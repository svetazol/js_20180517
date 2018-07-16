import Router from './modules/router';

window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    router
        .route('login', () => { console.log('show login'); })
        .route('chat', () => { console.log('show chat');  })
        .route('users', () => { console.log('show users'); });

    router.start();
});
