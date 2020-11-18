function add(){
    let monster = document.getElementById('monsters');
    let evil = document.getElementById('evils');
    let people = document.getElementById('people');

    if(monster.checked){
        let temp = document.createElement('div');
        temp.className = "person monster";
        people.appendChild(temp);
    }

    if(evil.checked){
        let temp = document.createElement('div');
        temp.className = "person evil";
        people.appendChild(temp);
    }
} 

function kill(){
    let peoples = document.getElementById('people').getElementsByTagName('div');
    let ran_num = 0, location=0, i=0;
    let live_len = 0;

    for(i=0; i<peoples.length; i++){
        if(peoples[i].className == "person splat")
            continue;
        else
            live_len += 1;
    }
    //console.log("live_len : ", live_len);
    if(live_len>1)
        ran_num = Math.floor(Math.random() * 2) + 1
    else ran_num = 1;

    //console.log("ran_num : ", ran_num);
    for(i=0; i<ran_num; i++){
        location = Math.floor(Math.random() * peoples.length);
        while(true){
            if(peoples[location].className == "person splat"){
                location = Math.floor(Math.random() * peoples.length);
            }
            else{
                //console.log("location : ", location);
                peoples[location].className = "person splat";
                break;
            }
        }
    }
}

function clean(){
    let dead = document.getElementById('people').getElementsByClassName('splat');
    console.log(dead);
    let i =0;
    for(i=dead.length-1; i>=0; i--){
        document.getElementById('people').removeChild(dead[i]);
    }
}

function stomp(){
    let peoples = document.getElementById('people').getElementsByTagName('div');
    let ran_num = 0, location=0, i=0;
    let live_len = 0;

    for(i=0; i<peoples.length; i++){
        if(peoples[i].className == "person splat")
            continue;
        else
            live_len += 1;
    }
    //console.log("live_len : ", live_len);
    if(live_len>1)
        ran_num = Math.floor(Math.random() * 2) + 1
    else ran_num = 1;

    //console.log("ran_num : ", ran_num);
    for(i=0; i<ran_num; i++){
        location = Math.floor(Math.random() * peoples.length);
        while(true){
            if(peoples[location].className == "person splat"){
                location = Math.floor(Math.random() * peoples.length);
            }
            else{
                //console.log("location : ", location);
                peoples[location].className = "person splat";
                break;
            }
        }
    }
}

function change(){
    let ogong = document.getElementById('supersaipien');
    if(ogong.src.includes('supersaipien1')){
        ogong.src = './images/supersaipien2.png';
    }
    else{
        ogong.src = './images/supersaipien1.png';
    }
}

function patrol(){
    let step = 1, pos=0;
    let ogong = document.getElementById('supersaipien');
    let left = true;

    ogong.style.left='0px';
    ogong.style.top = '0px';
    ogong.style.position = "relative";

    pos = parseInt(ogong.style.left);
    move = setInterval(function(){
        if(left){
            pos += step;
            ogong.style.left = pos.toString()+'px';
        }
        else{
            pos -= step;
            ogong.style.left = pos.toString()+'px';
        }
        if(parseInt(ogong.style.left)>300 ){
            left = false;
        }
        if(parseInt(ogong.style.left)<0){
            clearInterval(move);
        }
    }, 5)

    console.log(pos);
}
