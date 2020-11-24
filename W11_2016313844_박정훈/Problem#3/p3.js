let my_Canvas;
let ctx;
let up_input_file, lo_input_file;
let up_input_text, lo_input_text;

window.onload = function init(){
    my_Canvas = document.getElementById('myCan1');
    console.log(my_Canvas);
    ctx = my_Canvas.getContext("2d");
    
    up_input_file = document.getElementById("up_input_file");
    lo_input_file = document.getElementById('lo_input_file');
    up_input_text = document.getElementById('up_input_text');
    lo_input_text = document.getElementById('lo_input_text');

    up_input_file.addEventListener("change", loadImageUp);
    lo_input_file.addEventListener("change", loadImageLo);
    up_input_text.addEventListener("change", loadTextUp);
    lo_input_text.addEventListener("change", loadTextLo)
}


function loadImageUp(e) {
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.onload = function (fileObject) {
        let data = fileObject.target.result;
        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 50, 50, 300, 330);
        }
        img.src = data;
    };
    reader.readAsDataURL(file);
}

function loadImageLo(e) {
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.onload = function (fileObject) {
        let data = fileObject.target.result;
        let img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 50, 400, 300, 330);
        }
        img.src = data;
    };
    reader.readAsDataURL(file);
}

function loadTextUp(e){
    ctx.clearRect(400, 100, 800, 300);
    ctx.font = "30px Sans MS";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(up_input_text.value, 450, 150);
    //console.log(up_input_text.value);
}

function loadTextLo(e){
    ctx.clearRect(400, 350, 800, 800);
    ctx.font = "30px Sans MS";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(lo_input_text.value, 450, 500);
}