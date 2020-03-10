{/* <img src="imgs/img_00.jpg" id="imgfull"> */}
var a = 0;

var imgs = new Array(
    "imgs/img_00.jpg",
    "imgs/img_01.jpg",
    "imgs/img_02.jpg",
    "imgs/img_03.jpg",
    "imgs/img_04.jpg",
    "imgs/img_05.jpg",
    "imgs/img_06.jpg",
    "imgs/img_07.jpg",
    "imgs/img_08.jpg"
);

function next() {
    if (a < 8) a++;
    document.getElementById("imgfull").src = imgs[a];
}

function prev() {
    if (a > 0) a--;
    document.getElementById("imgfull").src = imgs[a];
}

document.onmousemove = function (e) {
    var x = (!e) ? event.clientX : e.clientX;
    var d = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if (Math.abs(d / 2) < x) { document.body.style.cursor = "e-resize"; document.body.onclick = next }
    if (Math.abs(d / 2) > x) { document.body.style.cursor = "w-resize"; document.body.onclick = prev }
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 37) { prev() }
    if (e.keyCode == 39) { next() }
    return false;
}