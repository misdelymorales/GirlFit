import {Component} from '../component.js';
import {likePost} from '../../lib/firebase.js';

const onLoad = () => {
    const renderPost= [...document.querySelectorAll(".like-post")];
    renderPost.map(p => {
        p.addEventListener("click", (e)=>{
            const postId= e.target.getAttribute("data-post");
            likePost(postId);
        });
    })
}

export const post = (template) => {
    return new Component(template, onLoad);
} 