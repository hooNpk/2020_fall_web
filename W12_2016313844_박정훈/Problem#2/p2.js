function color(){
    let boxes = document.getElementById('boxes').getElementsByTagName('div');
    console.log(boxes);

    for(i=0; i<boxes.length; i++){
        if(boxes[i].className.includes("red")){
            boxes[i].classList.remove("red");
        }
        else{
            boxes[i].classList.add("red")
        }
    }
}

function shape(){
    let boxes = document.getElementById('boxes').getElementsByTagName('div');
    console.log(boxes);

    for(i=0; i<boxes.length; i++){
        if(boxes[i].className.includes("ellipse")){
            boxes[i].classList.remove("ellipse");
        }
        else{
            boxes[i].classList.add("ellipse")
        }
    }
}

function add(){
    let boxes = document.getElementById('boxes');
    
    let temp = document.createElement('div');
    temp.className = "box";
    boxes.appendChild(temp);
    
}

function remove(){
    let boxes = document.getElementById('boxes').getElementsByTagName('div');
    let i =0;
    for(i=boxes.length-1; i>=0; i--){
        document.getElementById('boxes').removeChild(boxes[i]);
    }
}