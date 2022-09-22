import {Component} from '../component.js';

    let menu='';
    const updateNav = (actualPath) => {
        const nav = document.getElementById('nav');
        menu=(actualPath === '#/login' || actualPath==='#/register') ? '' : `
        <nav>
        <div class="logo">
        <img class="logo" src="img/Logo/logo-header.png">
        </div>
        
    
        <div>
        <input type="checkbox" id ="check">
        <label for="check" class="checkbtn">
          <i class="fa-solid fa-bars"></i>
        </label>
        <ul class="nav-menu">
        <li> <a href="#">Editar Perfil </a></li>
        <li> <a href="#/login">Cerrar Sesión </a></li>
    </ul> 
        </div></nav>`;

        nav.innerHTML='';
        nav.innerHTML=menu
    }
    const currentPath=  window.location.hash;

    //const menu=(currentPath === '#/login' || currentPath==='#/register') ? '' : `
    //     <div>
    //     <input type="checkbox" id ="check">
    //     <label for="check" class="checkbtn">
    //       <i class="fa-solid fa-bars"></i>
    //     </label>
    //     <ul class="nav-menu">
    //     <li> <a href="#">Editar Perfil </a></li>
    //     <li> <a href="#/login">Cerrar Sesión </a></li>
    // </ul> 
    //     </div>`;


   let template= `
    <nav>
        <div class="logo">
        <img class="logo" src="img/Logo/logo-header.png">
        </div>
        ${menu}
    </nav>
`;

export const nav= new Component(template, updateNav, 'nav');