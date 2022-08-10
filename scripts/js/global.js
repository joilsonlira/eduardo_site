var _a;
var main_header = document.getElementById("main_header");
var row_slide_img = document.querySelectorAll(".slide_item");
var _loop_1 = function (i) {
    var destaque_img = (_a = row_slide_img[i].firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute("src");
    setInterval(function () {
        var _a;
        console.log((_a = row_slide_img[i].firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute("src", destaque_img));
        row_slide_img[1].classList.toggle('dest');
        console.log(destaque_img);
    }, 3000);
};
for (var i = 0; i < row_slide_img.length; i++) {
    _loop_1(i);
}
