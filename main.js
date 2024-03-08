var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// ボールの初期位置(x,y) ボールの動き(dx.dy) ボールの半径(ballRadius)

var x = canvas.width /2;
var y = canvas.height - 30;
var dx = 2;
var dx = -2;
var ballRadius = 10;

// HTMLキャンパスでは座標の原点はキャンバスの左上の端
// ボールの動き　X>0なら　ボールは右
//             Y>0なら　"ボールは下"


function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD"; 
    ctx.fill();
    ctx.closePath;
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    }

    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
        dy = -dy;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(animete);
}

animate();