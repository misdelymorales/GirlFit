import { myRouter } from './lib/router.js';
import { stateUser } from './lib/firebase.js';
import {nav} from './view/components/nav.js';

stateUser();
//Página login se carga como predeterminada
const init = () => {
    window.location.hash = '#/login';
    myRouter(window.location.hash);
};

init();

//Cambio de ruta de página
window.addEventListener('hashchange', () => {
    myRouter(window.location.hash);
    nav.render('nav', window.location.hash);
});
