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
                <div id="postDone" class="postPublished">
                    <div id="tittlePostPublished" class="tittle-post-published">
                        <div class="user">
                            <img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> 
                            <h4>${post.name}</h4>
                        </div>
                        <button class="binPost delete-post" data-post="${post.id}"></button>
                    </div>
                    <p id="inputPost">${post.description}</p>
                    <div class="barra-rosada">
                        <div class="like">
                            <button data-post="${post.id}" class="icon-like like-post" type="submit"> ${post.likesCounter}</button>
                        </div>
                        <div class="icon-coment"><img src="./img/iconos/coment.png" alt="fotos"></div>
                    </div>
                </div>
            `
        });
        post(htmlPost).render("postPublished"); //ejecuta const post y renderiza en postPublished
};

//Función que publica
const publishPost = () => {
    const textPost= document.getElementById("textareaPost").value; //obtiene valor de textarea
    if(!textPost){
        alert('El input esta vacío');
    } else{
        createpost(textPost); //llamo función de crear post
    clear(); //ejecuta funcion que limpia
    }
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
<div id="postPublished" ></div>
`;

export const feed= new Component(template, onLoad);