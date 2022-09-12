import {Component} from './component.js';
import {nav} from './components/nav.js';
import {createpost} from '../lib/firebase.js';
import {showPosts} from '../lib/firebase.js';
import {likePost} from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    showPosts().then((posts)=>{
        console.log({posts})
        let htmlPost="";
        posts.forEach((post)=>{
            htmlPost+=`
            
                <div id="tittlePostPublished" class="tittle-post-published">
                    <div class="user">
                        <img class="userdisplay" src="./img/iconos/userdisplay.png" alt="fotos"> 
                        Anónima
                    </div>
                    <img class="binPost" src="./img/iconos/bin.png" alt="fotos">
                </div>
            
                <textarea id="inputPost"  rows="4" placeholder="Cuentanos que entrenamiento vas hacer hoy...">${post.description}</textarea>
                <div class="barra-rosada">
                    <div class="like">
                        <div id="counterLike">5</div>
                            <div class="icon-like">
                                <img src="./img/iconos/like.png" alt="fotos" style="margin-right: 0.5rem;">
                                <img src="./img/iconos/dislike.png" alt="fotos">
                            </div>
                        </div>
                    <div class="icon-coment"><img src="./img/iconos/coment.png" alt="fotos"></div>
                    
                    </div>
                </div>
            `
        });
        document.getElementById("postPublished").innerHTML=htmlPost;
    });
    
    document.getElementById("btnPost").addEventListener("click", publishPost);
    doc
}

const publishPost = () => {
    const textPost= document.getElementById("textareaPost").value;
    createpost(textPost);
}

// const showAllPosts = () => {
//    const collection
// }


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