import { login } from '../view/login.js';
import { register } from '../view/register.js';
import { feed } from '../view/feed.js';

const myRouter = (hash) => {
    const rootBox = document.getElementById('container');
    switch (hash) {
      case '#/':
      case '#/login':
        document.getElementById('container').innerHTML = '';
        rootBox.appendChild(login());
        break;
      case '#/register':
        document.getElementById('container').innerHTML = '';
        rootBox.appendChild(register());
        break;
    }     
  };
  
  export { myRouter };