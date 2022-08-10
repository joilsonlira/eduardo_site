const main_header = <HTMLElement>document.getElementById("main_header");
const row_slide_img = document.querySelectorAll(".slide_item");
const negocio_slide_img = document.querySelectorAll(".empresa_logo");

for(let i: number = 0; i < row_slide_img.length;i++){
    let destaque_img: string = row_slide_img[i].firstElementChild?.getAttribute("src");
    let destaque_img_negocio: string = negocio_slide_img[i].firstElementChild?.getAttribute("src");
    setInterval(() => {
        console.log(row_slide_img[i].firstElementChild?.setAttribute("src", destaque_img));
        console.log(row_slide_img[i].firstElementChild?.setAttribute("src", destaque_img_negocio));
        row_slide_img[1].classList.toggle('dest');
        console.log(destaque_img);
    }, 3000)
}




