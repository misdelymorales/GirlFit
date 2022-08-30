import { myRouter } from './lib/router.js';

const init = () => {
    window.location.hash = '#/login';
    myRouter(window.location.hash);
};

init();

window.addEventListener('hashchange', () => {
    myRouter(window.location.hash);
});