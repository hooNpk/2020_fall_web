let my_Canvas;
let ctx;
let center;
let luf1, luf2, luf_ani;
let hor_mover=0, ver_mover=0;
let fps, fpsInterval, startTime, now, then, elapsed;
let skill;
let animation;

window.onload = function init(){
    mycanvas = document.getElementById('myCan');
    mycanvas.width = mycanvas.parentElement.offsetWidth;
    //console.log(mycanvas.parentElement.offsetWidth);
    center = parseInt(mycanvas.width)/2;

    luf1 = document.createElement('img');
    luf1.setAttribute('src', './images/lufface.png');
    console.log(luf1);

    luf2 = document.createElement('img');
    luf2.setAttribute('src', './images/lufface2.png');
    luf_ani = document.createElement('img');
    luf_ani.setAttribute('src', './images/luffy.png');


    //console.log(mycanvas);
    ctx = mycanvas.getContext("2d");
    skill = document.getElementById('skill');
    skill.addEventListener("mouseenter", function(e){
        loadImage();
    });

    skill.addEventListener("mouseleave", function(e){
        clearImage()
    });
}

function loadImage() {
    hor_mover += 150;
    ver_mover += 10
    ctx.drawImage(luf_ani, hor_mover, 0, 150, 128, center-75, 0, 150, 128)
    ctx.drawImage(luf1, 0, ver_mover, 441, 10, center+75, ver_mover, 441, 10);
    ctx.drawImage(luf2, 0, ver_mover, 441, 10, center-75-441, ver_mover, 441, 10);
    animation = window.requestAnimationFrame(loadImage);

}

function clearImage(){
    console.log("CLEAR");
    window.cancelAnimationFrame(animation);
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    console.log(mycanvas.width, mycanvas.height);
    hor_mover = 0;
    ver_mover = 0;
}