// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

function draw() {
  background(160, 192, 255);
  fill(205,133,63);
  ellipse(x, y + 20, 400, 260);
  fill(255,218,185);
  ellipse(x, y, 350, 180);
  fill(255,230,185);
 if(mouseIsPressed){
    rect(mouseX, mouseY, 60,240);
  }
  else{
    rect(mouseX, mouseY, 30,120);
  }
  if (mouseIsPressed) { fill(255);
  textSize(70);
  textFont("serif");
text("単位よ、来い！", windowWidth/2-220, 100); }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.write("単位をもらうためにゴマをすりながらクリック！！！！");
