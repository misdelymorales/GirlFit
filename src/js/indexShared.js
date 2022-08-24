
/**
 * Está función contiene el código que se ejecuta al inicializar el módulo
 */
export default function(){
    console.info("shared initialized");
}

//función que añade o remueve clase para vistas
export function goTo(where) {
    const views = document.querySelectorAll(".view"); //selecciona todas las clases view
    if(views){
        views.forEach(view => {
            view.classList.remove("active"); //remueve clase active de los div
        })
    }
    document.getElementById(where).classList.add("active"); //añade clase active
}
