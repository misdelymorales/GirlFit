import {login} from '../view/login.js';
import {register} from '../view/register.js';
import {feed} from '../view/feed.js';

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

// function hiddeLinksNav (myRouter){
//     const menu = document.getElementById("ul-nav");
//     if (myRouter=== '#/login' || myRouter==='#/register'){
//         menu.style.display = 'none';
//     }
   
// }
//  hiddeLinksNav();