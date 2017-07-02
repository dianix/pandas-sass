var botones = document.getElementsByTagName("button");
var parrafos = document.getElementsByTagName("p");
var botonesImgs = document.getElementsByTagName("span");
var cajaImagenes = document.getElementById("fotos");

function ocultarP1() {
    console.log(event);
    parrafos[0].style.visibility = "hidden";
    botones[0].removeEventListener("click", ocultarP1);
    botones[0].addEventListener("click", mostrarP1);
}

function mostrarP1() {
    parrafos[0].style.visibility = "visible";
    botones[0].removeEventListener("click", mostrarP1);
    botones[0].addEventListener("click", ocultarP1);
}

function ocultarP2() {
    console.log(event);
    parrafos[1].style.visibility = "hidden";
    botones[1].removeEventListener("click", ocultarP2);
    botones[1].addEventListener("click", mostrarP2);
}

function mostrarP2() {
    parrafos[1].style.visibility = "visible";
    botones[1].removeEventListener("click", mostrarP2);
    botones[1].addEventListener("click", ocultarP2);
}

function identificarSpan() {
    ocultarFoto(this);
}

function ocultarFoto(boton) {
    var cajaImg = boton.parentNode;
    cajaImg.style.display = "none";
}

function restaurarImgs() {
    //console.log(cajaImagenes.children);
    var imagencillas = cajaImagenes.children;
    for (var i = 0; i < imagencillas.length; i++) {
        imagencillas[i].style.display = "inline-block";
    }
}

for (var i = 0; i < botonesImgs.length; i++) {
    botonesImgs[i].addEventListener("click", identificarSpan);
}

botones[0].addEventListener("click", ocultarP1);
botones[1].addEventListener("click", ocultarP2);
botones[2].addEventListener("click", restaurarImgs);
