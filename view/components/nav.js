import {Component} from '../component.js';

    let menu='';
    const updateNav = (actualPath) => {
        const screenWidth = window.innerWidth;
        const nav = document.getElementById('nav');
        menu=((actualPath === '#/login' || actualPath === '#/register') && screenWidth < 800 ) ? ' ' : ((actualPath === '#/login' || actualPath === '#/register') && screenWidth > 800 ) ? `
        <nav>
            <div class="logo">
            <img class="logo" src="img/Logo/logo-header.png">
            </div>
        </nav>`
        : 
        `
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
                        <li> <a href="#" > 
                            Editar Perfil
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </a></li>
                        <li> <a href="#/login" >
                            Cerrar Sesión
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </a></li>
                    </ul> 
                </div>
            </nav>`;

        nav.innerHTML='';
        nav.innerHTML=menu
    }


   let template= `
    <nav>
        <div class="logo">
        <img class="logo" src="img/Logo/logo-header.png">
        </div>
        ${menu}
    </nav>
`;

//    const currentPath=  window.location.hash;
// const screenWidth = window.innerWidth;
// template = ((currentPath === '#/login' || currentPath === '#/register') && screenWidth < 800 ) ? '' : template;

export const nav= new Component(template, updateNav, 'nav');