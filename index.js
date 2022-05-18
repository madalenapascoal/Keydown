var px = 0; //x para a direita é positivo e para a esquerda é negativo
var py = 0; // y para cima é negativo e para baixo é positivo(é a regra definida na linguagem)
var obj;

function move(event) {
    //obj = document.getElementById("dv1");
    var tecla = event.keyCode;
    //37-esquerda - 38-cima - 39-direita - 40-baixo
    // posso utilizar o if ou o switcher
    if (tecla == 37) {
        px -= 10;
        obj.style.left = px + "px";
    } else if (tecla == 38) {
        py -= 10;
        obj.style.top = py + "px";
    } else if (tecla == 39) {
        px += 10;
        obj.style.left = px + "px";
    } else if (tecla == 40) {
        py += 10;
        obj.style.top = py + "px";
    } else if (tecla == 13) { //tecla 13 é enter
        obj.style.backgroundColor = "#fff";
        alert("Evento keydown Removido");
        document.removeEventListener("keydown", move);
        //como a função está associada ao document posso utilizar this ou document
    }
}

function addClique() {
    document.addEventListener("keydown", move);
    obj.style.backgroundColor = "#f00";
}

function iniciar() {
    obj = document.getElementById("dv1");
    obj.addEventListener("click", addClique);
};
window.addEventListener("load", iniciar);