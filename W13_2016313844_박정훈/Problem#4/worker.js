var i1 = 1;
var i2 = 1;
var i3 = 0;

self.onmessage = function (event){
    let index_req = event.data;
    let index = 0;

    for(index=0; index<=(index_req-2); index++){
        i3 = i1 + i2;
        console.log(i1, " : ", i2, " : ", i3);
        if(index%2) i2 = i3;
        else    i1 = i3; 
    }
    postMessage(i3);
}