import {Component} from './component.js';

const onLoad = () => {
    console.log("Registro cargado");
}

const template = `
    <h1>register page</h1>
`;

export const register = new Component(template, onLoad);
