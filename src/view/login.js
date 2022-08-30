import {Component} from './component.js';

const onLoad = () => {
    const welcomeBtn = document.getElementById('welcome-btn');
    welcomeBtn.addEventListener("click", showWelcome);
}

const showWelcome = () => {
    alert("Welcome");
}

const template = `
    <div>
        <h1>login page</h1>
        <button id="welcome-btn">Show me welcome!</button>
        <a href="#/register">Ir al registro</a>
    </div>
`;

export const login = new Component(template, onLoad);
