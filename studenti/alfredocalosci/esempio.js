let w = 600;
let r = w/4; // raggio // radius
let a = 0; // angle

function setup() {
  createCanvas(w, w);
  colorMode(HSB); //adesso mi baso sullo spazio HSB
}

function draw() {
  background(0,0,98);
  
  //noFill();
  let h = map(sin(a), -1,1, 0,360); //va da -1 a 1 --> 0 a 360
  fill(h,80, 80);
  circle(w/2,w/2, r*2);
  
  let x = w/2 + cos(a) * r;
  let y = w/2 + sin(a) * r;
  
  fill(0);
  circle(x,y,36);

  a = a + 0.01;

  //pianeta
  let xp = x + cos(a*2) * r/4;
  let yp = y + sin(a*2) * r/4;

  circle(xp,yp,18);

}

function keyTyped(){
  console.log(key);
}
