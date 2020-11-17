window.onload = function(){

    let ball;
    let area;
    const update_period = 20;
    let speed = 0;
    let pos;
    let limit;

    ball = document.getElementById('ball');
    area = document.getElementById('ballarea');

    ball.style.top = '0px';

    setInterval(()=>{
        limit = (area.clientHeight - ball.clientHeight-2);
        pos = ball.style.top.replace('p', '');
        pos = pos.replace('x', '')
        pos = parseFloat(pos);
        speed += 1;
        ball.style.top = (pos+speed).toString() +'px';

        

        if(pos > (limit)){
            speed = (-speed) * 0.75;
            ball.style.top = ((pos+speed).toString()+'px');
        }

        console.log('speed: ', speed);
        console.log('pos : ', pos);

    }, update_period);

    console.log(ball.clientHeight, area.clientHeight);
}