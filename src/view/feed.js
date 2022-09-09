import {Component} from './component.js';
import {nav} from './components/nav.js';
import { createpost } from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    createpost();
    document.getElementById("btnPost").addEventListener("click", publishPost);
}

const publishPost = () => {
    const textPost= document.getElementById("textareaPost").value;
    createpost(textPost);
}


const template = `
<div id="container-feed">
    <div id="post">
        <div id="tittlePost"><img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> Anónima</div>
        <textarea id="textareaPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy..."></textarea>
        <div class="barra-rosada">
            <div clase="icon-post">
                <img src="./img/iconos/pic.png" alt="fotos">
            </div>
            <div> <button  id="btnPost">Publicar</button> </div>
        </div>
    </div>


    <div id="postPublished">
        <div id="tittlePost"><img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> Anónima
            <img class="userdisplay" src="./img/iconos/bin.png" alt="fotos">
        </div>
        <textarea id="inputPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy...">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
        <div class="barra-rosada">
            <div clase="icon-published">
                <div>5</div>
                <img src="./img/iconos/like.png" alt="fotos">
                <img src="./img/iconos/dislike.png" alt="fotos">
                <div><img src="./img/iconos/coment.png" alt="fotos"></div>
            </div>
        </div>
    </div>
</div>
`;

export const feed= new Component(template, onLoad);