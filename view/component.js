export function Component(template, load) {
    this.render = function(id, props){
        const root = document.getElementById(id || 'root');
        this.path= props;
        if(root){
            root.innerHTML = template || '<div></div>';
            if(load) load(window.location.hash);
        }
    }
}



