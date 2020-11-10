function i_wanna_know(){
    let myc = '#' + Math.round(Math.random()*0xffffff).toString(16);
    document.body.style.background = myc;
    let color_h1 = document.getElementById('mycolor');
    color_h1.innerHTML = 'Your color is '+myc+'!';
}

//alert('Networking Lab - SKKU');

