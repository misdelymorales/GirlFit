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

                        <div >
                            <button class="editPost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button class="binPost delete-post" data-post="${post.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p id="inputPost" class="hidden">${post.description}</p>
                    <textarea id="textareaEdit" class="hidden"></textarea>
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
    const textPost= document.getElementById("textareaPost").value; //obtine valor de textarea
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