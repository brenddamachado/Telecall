var elementosComFonteOriginal = document.querySelectorAll('p, h1, h2, h3, h4, h5, div, img, a, li, label.label_login, ul, ol');

elementosComFonteOriginal.forEach(function(elemento) {
    elemento.dataset.tamanhoOriginal = parseFloat(getComputedStyle(elemento).fontSize);
});

document.getElementById("font-toggle").addEventListener("click", function () {
    var fontOptions = document.querySelector(".font-options");
    fontOptions.style.display = fontOptions.style.display === "block" ? "none" : "block";
});

document.getElementById("increase-font").addEventListener("click", function () {
    aumentarFonte();
});

document.getElementById("decrease-font").addEventListener("click", function () {
    diminuirFonte();
});

document.getElementById("reset-font").addEventListener("click", function () {
    redefinirFonte();
});

function changeFontSize(element, factor) {
    var currentSize = parseFloat(getComputedStyle(element).fontSize);
    var newSize = currentSize * factor;
    element.style.fontSize = newSize + "px";
}

function aumentarFonte() {
    elementosComFonteOriginal.forEach(function(elemento) {
        changeFontSize(elemento, 1.2);
    });
}

function diminuirFonte() {
    elementosComFonteOriginal.forEach(function(elemento) {
        changeFontSize(elemento, 1 / 1.2);
    });
}

function redefinirFonte() {
    elementosComFonteOriginal.forEach(function(elemento) {
        var tamanhoOriginal = parseFloat(elemento.dataset.tamanhoOriginal);
        elemento.style.fontSize = tamanhoOriginal + "px";
    });
}

// Adicionado para depuração
document.querySelector('.guia').addEventListener('click', function() {
    console.log('Link clicado!');
});
