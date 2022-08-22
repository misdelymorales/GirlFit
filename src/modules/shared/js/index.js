export default function (){

    /**
     * Está función contiene el código que se ejecuta al inicializar el módulo
     */
    (function init(){
        console.info("shared initialized");
    })();
    
    function showWelcome(){
        alert("Bienvenida a GirlFit");
    }
};