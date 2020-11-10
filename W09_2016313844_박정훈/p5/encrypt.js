const char_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'];

const char_dict = {'a': 0, 'b' : 1, 'c':2, 'd':3, 'e':4, 'f':5,
'g':6, 'h':7, 'i':8, 'j':9, 'k':10, 'l':11, 'm':12, 'n':13,
'o':14, 'p':15, 'q':16, 'r':17, 's':18, 't':19, 'u':20,
'v':21, 'w':22, 'x':23, 'y':24, 'z':25};

let ran_dict = {'a': 0, 'b' : 1, 'c':2, 'd':3, 'e':4, 'f':5,
'g':6, 'h':7, 'i':8, 'j':9, 'k':10, 'l':11, 'm':12, 'n':13,
'o':14, 'p':15, 'q':16, 'r':17, 's':18, 't':19, 'u':20,
'v':21, 'w':22, 'x':23, 'y':24, 'z':25};


function randomized(plain){
    let i = 0;
    let ran = 0;
    let check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0];
    let encrypted_text = '';
    for(i=0; i<26; i++){
        while(1){
            ran = Math.round(Math.random()*100)%26;
            if(check[ran]==0){
                ran_dict[char_list[i]] = ran;
                check[ran]=1;
                break;
            }
        }
    }
    
    for(i=0; i<plain.length; i++){
        if(plain[i] in char_dict){
            num_val = ran_dict[plain[i]];
            encrypted_text = encrypted_text + char_list[num_val];
        }
        else{
            encrypted_text = encrypted_text + text.value[i];
        }    
    }

    return encrypted_text;
}

function enc(){
    let select = document.getElementById('type');
    let select2 = document.getElementById('val');
    let shift_val = select2.options[select.selectedIndex].value;
    let text = document.getElementById('plain_text');
    let i = 0;
    let encrypted_text = '';

    if(select.options[select.selectedIndex].value == 'shift'){
        shift_val = Number(select2.options[select2.selectedIndex].value);
        for(i=0; i<text.value.length; i++){
            if(text.value[i] in char_dict){
                num_val = char_dict[text.value[i]];
                if(num_val < shift_val){
                    encrypted_text = encrypted_text + char_list[num_val - shift_val + 26];
                }
                else{
                    encrypted_text = encrypted_text + char_list[num_val - shift_val];
                }
            }
            else{
                encrypted_text = encrypted_text + text.value[i];
            }    
        }
    }
    else{
        encrypted_text = randomized(text.value);
    }
    
    console.log(encrypted_text);
    
}
