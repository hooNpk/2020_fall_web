let re = new Array();
re[0] = /.+/;
re[1] = /^[0-9a-zA-Z][0-9a-zA-Z]*@[0-9a-zA-Z][0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/; 
re[2] = /[0-9]{5,}/;    //'00000'은 제외해줘야해
re[3] = /.+/;
re[4] = /[0-9]{8,}  /;     //마찬가지로 00000000은 제외
re[5] = /.+/;
re[6] = /(\d{4})-(\d{2})-(\d{2})/;
re[7] = /.{6,}/
re[8] = /.{6,}/
re[9] = /.{1,}/

function validate(){
    let root_div = document.getElementById('formtovalidate');
    let i = 0, j=0;
    let len = 0;
    let valid = new Array(true, true, true, true, true, true, true, true, true, true);
    for(i=0; i<10; i++){
        if(!re[i].test(root_div.getElementsByTagName('div')[i].childNodes[1].value)){
            valid[i] = false;
        }

        if(i==6){
            let birth = root_div.getElementsByTagName('div')[6].childNodes[1].value.split('-');
            let month = parseInt(birth[1]);
            let day = parseInt(birth[2]);
            if(month<1 || month>12 || day<1 || day>31){
                valid[i] = false;
            }
            else if(month==2 && day>28){
                valid[i] = false;
            }
            else if((month==4 || month==6 || month==9 || month==11) && day>30){
                valid[i] = false;
            }
        }

        if(i==2){
            len = root_div.getElementsByTagName('div')[2].childNodes[1].value.length;
            let positive = false;
            for(j=0; j<len; j++){
                //console.log(parseInt(root_div.getElementsByTagName('div')[2].childNodes[1].value[j]));
                if(parseInt(root_div.getElementsByTagName('div')[2].childNodes[1].value[j])>0) positive=true;
            }
            if(!positive){
                valid[i] = false;
            }
        }

        if(i==4){
            len = root_div.getElementsByTagName('div')[4].childNodes[1].value.length;
            let positive = false;
            for(j=0; j<len; j++){
                console.log(parseInt(root_div.getElementsByTagName('div')[4].childNodes[1].value[j]));
                if(parseInt(root_div.getElementsByTagName('div')[4].childNodes[1].value[j])>0) positive=true;
            }
            if(!positive){
                valid[i] = false;
            }
        }
    }

    if(root_div.getElementsByTagName('div')[7].childNodes[1].value!=root_div.getElementsByTagName('div')[8].childNodes[1].value){
        valid[7] = valid[8] = false;
    }

    for(i=0; i<10; i++){
        if(!valid[i]){
            root_div.getElementsByTagName('div')[i].childNodes[1].style = "background-color : #ff0000";
        }
        else{
            root_div.getElementsByTagName('div')[i].childNodes[1].style = "background-color : #ffffff";
        }
    }
};

//alert('Networking Lab - SKKU');