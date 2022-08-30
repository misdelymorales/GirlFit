import {login} from '../view/login.js';
import {register} from '../view/register.js';

const myRouter = (hash) => {
    switch (hash) {
      case '#/':
      case '#/login': login.render();
        break;
      case '#/register': register.render();
        break;
        case '#/feed': feed.render();
        break;
    }     
  };
  
  export { myRouter };