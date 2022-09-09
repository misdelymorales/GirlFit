import {Component} from './component.js';
import {nav} from './components/nav.js';
import { createpost } from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    createpost();
}

const template = `
    <div id="container-feed">
    <input id="inputPost" type="textarea" placeholder="Cuentanos que entrenamiento vas hacer hoy...">
    <div id="barraRosada">
     <div id="iconos">
         <img src="./img/iconos/pic.png" alt="fotos">
    </div>
    <div id="postBtn">   <button id="publishPost">Publicar</button>           
    </div>
</div>
`;

export const feed= new Component(template, onLoad);