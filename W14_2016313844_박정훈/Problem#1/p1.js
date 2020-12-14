let file;
let name;
let size;
let reader;

window.onload = function(){
    document.getElementById('file_input').onchange = function(){
        file = this.files[0];
        name = file.name;
        size = file.size;
        reader = new FileReader();
    
        console.log(file);
        console.log(name);
        console.log(size);
        console.log(reader);
    }
}

function readfile(){

    let textarea = document.getElementById("textarea");
    
    if(size>100)
        textarea.innerHTML = name;
    else{
        let result;
        result = reader.readAsText(file);
        reader.onload = function(progressEvent) {
            result = progressEvent.target.result;
            console.log("INNER HTML", result);
            textarea.innerHTML = name + '\n' + result;
        };
    }

    
}