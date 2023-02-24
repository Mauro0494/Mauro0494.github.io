let menuVisible = false;
//funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//oculta el menu una vez selecionada la opcion
function seleccionar(){
    document.getElementById("nav").classList= "";
    menuVisible= false;
}
