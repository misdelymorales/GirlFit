import {Component} from '../component.js';

    const currentPath=  window.location.hash;
    console.log(currentPath);
    const menu=(currentPath === '#/login' || currentPath==='#/register') ? '' : `
    <div ><img class="nav-menu-icon" src="img/Imagenes/nav.png">
        <ul clas="nav-links">
            <li> <a href="#">Editar Perfil </a></li>
            <li> <a href="Sign in">Cerrar Sesión </a></li>
        </ul>
    </div>`;


let template = `
    <nav>
        <div class="logo">
        <img class="logo" src="img/Logo/logo-header.png">
        </div>
        ${menu}
    </nav>
`;
const screenWidth = window.innerWidth;
template = ((currentPath === '#/login' || currentPath === '#/register') && screenWidth < 800 ) ? '' : template;

export const nav= new Component(template, undefined, 'nav');