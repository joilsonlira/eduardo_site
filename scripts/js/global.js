var main_header = document.getElementById("main_header");
var row_slide_img = document.querySelectorAll(".slide_item");
setInterval(function () {
    var _a, _b;
    for (var i = 0; i < row_slide_img.length; i++) {
        var destaque_img = (_a = row_slide_img[i].firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute("src");
        console.log((_b = row_slide_img[1].firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute("src", destaque_img));
        row_slide_img[1].classList.toggle('dest');
        console.log(i);
    }
}, 3000);
