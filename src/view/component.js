export function Component(template, load) {
    this.render = function(id, props){
        const root = document.getElementById(id || 'root');
        this.path= props;
        root.innerHTML = template;
        if(load) load(window.location.hash);
    }
}



