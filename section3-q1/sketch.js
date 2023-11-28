// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
const count = 0;
const cycle = 100;
const size = 50;
const increment = 1;
function setup() {
  createCanvas(200, 200);
}
function draw() {
  background(160, 192, 255);
  count = (count + increment) % cycle;
  if (count < cycle / 2) {
    size = count + 50;
  } else {
    size = (cycle - count) + 50;
  }
  if (KeyboardEvent) {
    increment = 5;
  } else {
    increment = 1;
  }
  ellipse(width / 2, height / 2, size);
}