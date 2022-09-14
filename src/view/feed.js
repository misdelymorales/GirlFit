import {Component} from './component.js';
import {nav} from './components/nav.js';
import {post} from './components/post.js';
import {createpost} from '../lib/firebase.js';
import {showPosts} from '../lib/firebase.js';

//función que se ejecuta al inicio
const onLoad = () => {
    nav.render('nav'); //renderiza menú
    showPosts(generatePosts); //ejecuta función mostrar posts, que tiene como parámetro función generar posts
    document.getElementById("btnPost").addEventListener("click", publishPost); // evento que se ejecuta al dar click al boton publicar
    
}

//const para generar plantilla de los posts
const generatePosts = (posts) => {
    let htmlPost="";
        posts.forEach((post)=>{
            htmlPost+=`
                <div id="postDone">
                    <div id="tittlePostPublished" class="tittle-post-published">
                        <div class="user">
                            <img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> 
                            ${post.name}
                        </div>
                        <button class="binPost delete-post" data-post="${post.id}"></button>
                    </div>
                
                    <textarea id="inputPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy...">${post.description}</textarea>
                    <div class="barra-rosada">
                        <div class="like">
                            <div id="counterLike">${post.likesCounter}</div>
                                <button data-post="${post.id}" class="icon-like like-post" type="submit"> </button>
                            </div>
                        <div class="icon-coment"><img src="./img/iconos/coment.png" alt="fotos"></div>
                        
                        </div>
                    </div>
                </div>
            `
        });
        post(htmlPost).render("postPublished"); //ejecuta const post y renderiza en postPublished
};

//Función que publica
const publishPost = () => {
    const textPost= document.getElementById("textareaPost").value; //obtine valor de textarea
    createpost(textPost); //llamo función de crear post
    clear(); //ejecuta funcion que limpia
}

//Función para limpiar textarea después de publicar
function clear() {
    document.getElementById("textareaPost").value = "";
  }

const template = `
<div id="container-feed">
    <div id="post">
        <div id="tittlePost" class="titte-Post"><img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> 
        Anónima 
        </div>
        <textarea id="textareaPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy..."></textarea>
        <div class="barra-rosada">
            <div class="icon-pic">
                <img src="./img/iconos/pic.png" alt="fotos">
            </div>
            <div> <button  id="btnPost">Publicar</button> </div>
        </div>
    </div>
<div id="postPublished"></div>
`;

export const feed= new Component(template, onLoad);