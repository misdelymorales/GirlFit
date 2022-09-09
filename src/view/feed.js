import {Component} from './component.js';
import {nav} from './components/nav.js';
import { createpost } from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    createpost();
}

const template = `
<div id="container-feed">
    <div id="post">
        <div id="tittlePost"><img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> Anónima</div>
        <textarea id="inputPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy..."></textarea>
        <div id="barra-rosada">
            <div id="iconos">
                <img src="./img/iconos/pic.png" alt="fotos">
            </div>
            <div id="btnPost"> <button  id="publishPost">Publicar</button> </div>
        </div>
    </div>
</div>
`;

export const feed= new Component(template, onLoad);