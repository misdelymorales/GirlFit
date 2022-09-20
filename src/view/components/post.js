import {Component} from '../component.js';
import {likePost, deletePost, editPosts} from '../../lib/firebase.js';

//función que se ejecuta al inicio
const onLoad = () => {
    const renderPost= [...document.querySelectorAll(".like-post")]; 
    renderPost.map(p => {
        p.addEventListener("click", (e)=>{
            const postId= e.target.getAttribute("data-post");
            likePost(postId);
        });
    })

    const deleteP= [...document.querySelectorAll(".delete-post")];
    deleteP.map(p => {
        p.addEventListener("click", (e)=>{
            const postIdDelete= e.target.getAttribute("data-post");
            const salir =confirm('¿Quieres eliminar el post?');
            if(salir === true){
                deletePost(postIdDelete);
            };
        });
    });

// editar post

    const editP = [...document.querySelectorAll(".edit")];
    editP.map((element) =>element.addEventListener('click', (e)=>{
        const postId= e.target.getAttribute('data-post');
        const editTextarea= document.getElementById(`textareaEdit-${postId}`);
        editTextarea.classList.remove('hide');
        const editParagraph= document.getElementById(`inputPost-${postId}`);
        editParagraph.classList.add('hide');
        const showSaveCancel= document.getElementById(`buttonSaveCancel-${postId}`);
        showSaveCancel.classList.remove('hide');
        const hideButtonEdit= document.getElementById(`buttonUserEdit-${postId}`);
        hideButtonEdit.classList.add('hide');
    }));

    const saveEditP = [...document.querySelectorAll(".save")];
    saveEditP.map((element) =>element.addEventListener('click', (e)=>{
        const postId= e.target.getAttribute('data-post');
        const editTextarea= document.getElementById(`textareaEdit-${postId}`);
        editPosts(postId, editTextarea.value);
    }));


}




export const post = (template) => {
    return new Component(template, onLoad);
} 
