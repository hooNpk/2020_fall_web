function convert(){


    let option = document.getElementById('convert1');    
    let span = document.getElementById('answer');
    let input = document.getElementById('input');
    let val;

    if(option.value=='kgtopounds'){
        val = Number(input.value)*2.20462262;
        span.innerHTML = String(val);
    }
    else{
        val = Number(input.value)*0.45359237;
        span.innerHTML = String(val);
    }
    //document.body.style.background = myc;
    //let color_h1 = document.getElementById('mycolor');
    //color_h1.innerHTML = 'Your color is '+myc+'!';
}

//alert('Networking Lab - SKKU');