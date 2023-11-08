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

function aumentarFonte() {
    var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newSize = currentSize * 1.2;
    document.body.style.fontSize = newSize + "px";
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontSize = (parseFloat(getComputedStyle(headings[i]).fontSize) * 1.2) + "px";
    }
}

function diminuirFonte() {
    var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    var newSize = currentSize / 1.2;
    document.body.style.fontSize = newSize + "px";
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontSize = (parseFloat(getComputedStyle(headings[i]).fontSize) / 1.2) + "px";
    }
}

function redefinirFonte() {
    document.body.style.fontSize = "16px";
    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.fontSize = "2rem";
    }
}
