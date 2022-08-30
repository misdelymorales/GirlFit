export function Component(template, load) {
    this.render = function(){
        const root = document.getElementById('root');
        root.innerHTML = template;
        if(load) load();
    }
}