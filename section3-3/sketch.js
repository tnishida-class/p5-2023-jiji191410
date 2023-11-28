
function setup(){
createCanvas(windowWidth, windowHeight);

x = widht-25
y = height-25;
}
  let y = 50; // 円の初期位置
  let vy = 0; // 円の速度
  let gravity = 1; // 重力

// 円を描画する関数
function draw() {
    background(5, 39, 94);
    ellipse(x, y, 50);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア
    ctx.beginPath();
    ctx.arc(50, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

// アニメーションを行う関数
function animate() {
    vy += gravity; // 重力を速度に加える
    y += vy; // 速度を位置に加える

    if (y > canvas.height - 20) { // 地面についたら跳ね返る
        y = canvas.height - 20;
        vy *= -0.9;
    }

    drawCircle();

    requestAnimationFrame(animate); // 次のアニメーションフレームを要求
}

// スペースキーが押されたときに跳ねる
window.onkeydown = function(event) {
    if (event.code === 'Space') {
        vy = -10;
    }
};

animate(); // アニメーションを開始
