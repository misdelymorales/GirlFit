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
            if(confirm('¿Quieres eliminar el post?') === true){
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
        const saveCancel= document.getElementById(`buttonSaveCancel-${postId}`);
        saveCancel.classList.remove('hide');
        const hideButtonEdit= document.getElementById(`buttonUserEdit-${postId}`);
        hideButtonEdit.classList.add('hide');
    }));

    const saveEditP = [...document.querySelectorAll(".save")];
    saveEditP.map((element) =>element.addEventListener('click', (e)=>{
        const postId= e.target.getAttribute('data-post');
        const editTextarea= document.getElementById(`textareaEdit-${postId}`);
        editPosts(postId, editTextarea.value);
    }));

    const cancelEditP= [...document.querySelectorAll(".cancel")];
    cancelEditP.map((element) =>element.addEventListener('click', (e)=>{
        const postId= e.target.getAttribute('data-post');
        const editTextarea= document.getElementById(`textareaEdit-${postId}`);
        const paragraph= document.getElementById(`inputPost-${postId}`);
        editTextarea.value=paragraph.innerHTML;
        editTextarea.classList.add('hide');
        paragraph.classList.remove('hide');
        const saveCancel= document.getElementById(`buttonSaveCancel-${postId}`);
        saveCancel.classList.add('hide');
        const buttonEdit= document.getElementById(`buttonUserEdit-${postId}`);
        buttonEdit.classList.remove('hide');
    }));
}




export const post = (template) => {
    return new Component(template, onLoad);
} 
