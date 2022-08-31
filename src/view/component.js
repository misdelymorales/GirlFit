export function Component(template, load) {
    this.render = function(id){
        const root = document.getElementById(id || 'root');
        root.innerHTML = template;
        if(load) load();
    }
}