import {Component} from './component.js';

const onLoad = () => {
    console.log("Feed cargado");
}

const template = `
    <h1>feed page</h1>
`;

export default Component(template, onLoad);