window.onload = function(){

    let file = document.querySelector("#get_file");

    file.onchange = function(){
        let file_list = file.files;
        let reader = new FileReader();
        reader.readAsDataURL(file_list[0]);
    
        reader.onload = function(){
            document.querySelector('#preview').src = reader.result;
    
            let tempImage = new Image();
            tempImage.src = reader.result;
            tempImage.onload = function(){
                let canvas = document.createElement('canvas');
                let canvasContext = canvas.getContext("2d");
    
                canvas.width = 100;
                canvas.height = 100;
    
                canvasContext.drawImage(this, 0, 0, 100, 100);
                let dataURI = canvas.toDataURL("image/jpeg");
                document.querySelector("#thumbnail").src = dataURI;
                document.querySelector("#donwload").href = dataURI;
            }
        }
    }
}
