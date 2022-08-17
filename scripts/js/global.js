"use strict";
var main_header = document.getElementById("main_header");
var negocio_slide_img = document.querySelectorAll(".empresa_logo");
var atleta_slide_img_a = document.querySelector('.--a');
var atleta_slide_img_b = document.querySelector('.--b');
var atleta_slide_img_c = document.querySelector('.--c');
var array = [
    "./components/images/gallery_assets/Foto 4 WTW.jpeg",
    "./components/images/gallery_assets/Captura de Tela 2022-07-29 às 17.13.07.png",
    "./components/images/gallery_assets/Edu palestrando no WTW.png"
];
var i = 1;
setInterval(function () {
    // photo?.classList.remove('teste')
    var _a, _b, _c;
    (_a = atleta_slide_img_a === null || atleta_slide_img_a === void 0 ? void 0 : atleta_slide_img_a.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('src', array[i - 1]);
    (_b = atleta_slide_img_b === null || atleta_slide_img_b === void 0 ? void 0 : atleta_slide_img_b.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute('src', array[i]);
    (_c = atleta_slide_img_c === null || atleta_slide_img_c === void 0 ? void 0 : atleta_slide_img_c.firstElementChild) === null || _c === void 0 ? void 0 : _c.setAttribute('src', array[i + 1]);
    i = i + 1;
    if (i > (array.length - 1) || i == -1) {
        i = 0;
    }
}, 5000);
