function validate(){
    let root_div = document.getElementById('formtovalidate');
    let i = 0;

    for(i=0; i<7; i++){
        if(root_div.getElementsByTagName('div')[i].childNodes[1].value.replace(/ /g, "")==''){
            root_div.getElementsByTagName('div')[i].childNodes[1].style = "background-color : #ff0000";
        }
    }
        
    //document.body.style.background = myc;
    //let color_h1 = document.getElementById('mycolor');
    //color_h1.innerHTML = 'Your color is '+myc+'!';
};

//alert('Networking Lab - SKKU');