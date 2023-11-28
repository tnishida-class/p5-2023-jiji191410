// ダーツ
let cx ;
let cy ;
function setup() {
  const weight = 300;
  const height = 300;
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  cx = weight / 2;
  cy = height / 2;
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);


  const maxR = min(weight, height); // 大きさは幅と高さのうち小さい方

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(black, cream, maxR*0.75);
  drawArcs(green, red, maxR * 0.6);
  drawArcs(black, cream, maxR*0.55);
  drawCircle(green, maxR*0.1);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);

  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}
