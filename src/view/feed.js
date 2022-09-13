import {Component} from './component.js';
import {nav} from './components/nav.js';
import {post} from './components/post.js';
import {createpost} from '../lib/firebase.js';
import {showPosts} from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    showPosts().then((posts)=>{
        let htmlPost="";
        posts.forEach((post)=>{
            htmlPost+=`
                <div id="tittlePostPublished" class="tittle-post-published">
                    <div class="user">
                        <img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> 
                        Anónima
                    </div>
                    <button class="binPost delete-post" data-post="${post.id}"></button>
                </div>
            
                <textarea id="inputPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy...">${post.description}</textarea>
                <div class="barra-rosada">
                    <div class="like">
                        <div id="counterLike">${post.likesCounter}</div>
                            <button data-post="${post.id}" class="icon-like like-post" type="submit"> </button>
                            <button data-post="${post.id}" class="icon-dislike like-post" type="submit"> </button>
                        </div>
                    <div class="icon-coment"><img src="./img/iconos/coment.png" alt="fotos"></div>
                    
                    </div>
                </div>
            `
        });
        post(htmlPost).render("postPublished");
    });
    
    document.getElementById("btnPost").addEventListener("click", publishPost);
    
}

const publishPost = () => {
    const textPost= document.getElementById("textareaPost").value;
    createpost(textPost);
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