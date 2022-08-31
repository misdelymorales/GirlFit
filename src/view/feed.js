import {Component} from './component.js';
// import {nav} from './components/nav.js';

const onLoad = () => {
    // nav.render('nav');
}

const template = `
    <h1>feed page</h1>
`;

export const feed= new Component(template, onLoad);
