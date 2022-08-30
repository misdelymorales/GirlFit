import { myRouter } from './lib/router.js';

const init = () => {
    console.log("initializing app")
    window.location.hash = '#/login';
    myRouter(window.location.hash);
};

init();

window.addEventListener('hashchange', () => {
    myRouter(window.location.hash);
});