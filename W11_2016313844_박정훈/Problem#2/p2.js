function mouseon(){
    let funny = document.getElementById('funny');
    funny.style.width = '200px';
    funny.src = './images/answer.jpg';
}

function mouseoff(){
    let funny = document.getElementById('funny');
    funny.style.width = '300px';
    funny.src = './images/please.jpg';
    
}

function move(){
    let left = Math.floor(Math.random()*1000)
    let top = Math.floor(Math.random()*800)
    let button = document.getElementById('no');
    button.style.position = "absolute";
    button.style.left = left.toString()+'px';
    button.style.top = top.toString()+'px';
}
