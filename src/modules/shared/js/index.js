/**
 * Está función contiene el código que se ejecuta al inicializar el módulo
 */
export default function(){
    console.info("shared initialized");
}

export function goTo(where) {
    const views = document.querySelectorAll(".view");
    if(views){
        views.forEach(view => {
            view.classList.remove("active");
        })
    }
    document.getElementById(where).classList.add("active");
}
