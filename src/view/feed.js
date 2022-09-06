import {Component} from './component.js';
import {nav} from './components/nav.js';

const onLoad = () => {
    nav.render('nav');
}

const template = `
    <div id="container-feed">
    <h1>Feed</h1>
    <div>
`;

export const feed= new Component(template, onLoad);