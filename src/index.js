import { myRouter } from './lib/router.js';
import { authentication } from './lib/firebase.js';

authentication();
const init = () => {
    window.location.hash = '#/login';
    myRouter(window.location.hash);
  };
  
  init();
  
  window.addEventListener('hashchange', () => {
    myRouter(window.location.hash);
  });