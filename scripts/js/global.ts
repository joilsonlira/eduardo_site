const main_header = <HTMLElement>document.getElementById("main_header");
const negocio_slide_img = document.querySelectorAll(".empresa_logo");

const atleta_slide_img_a = document.querySelector('.--a');
const atleta_slide_img_b = document.querySelector('.--b');
const atleta_slide_img_c = document.querySelector('.--c');

const array = [
"./components/images/gallery_assets/Foto 4 WTW.jpeg",
"./components/images/gallery_assets/Captura de Tela 2022-07-29 às 17.13.07.png",
"./components/images/gallery_assets/Edu palestrando no WTW.png"]

let i:number = 0
let transição:number = 0
setInterval(function(){
    // photo?.classList.remove('teste')
    
    if(i > (array.length -1) || i < 0 ){
        i = 0
    }
    atleta_slide_img_a?.firstElementChild?.setAttribute('src', array[i-1])
    atleta_slide_img_b?.firstElementChild?.setAttribute('src', array[i])
    atleta_slide_img_c?.firstElementChild?.setAttribute('src', array[i+1])
    // photo?.classList.toggle('teste')
    // atleta_slide_img_b?.classList.toggle("slide_destaque")

    i = i + 1

},10000);




