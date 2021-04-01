let w = 600;
let x = 120;
let y = 300;
// array
let xx = [120, 98, 480, 6, 90];
let yy = [1,2,3,4,5];
function setup() {
  createCanvas(w, w);
  // array operators
  xx.push(550);  // aggiungi un valore // add a new value
  yy.push(550);  // aggiungi un valore // add a new value
  console.log(xx);
  console.log(xx.length); // lunghezza dell' array
  console.log(xx[2]);  // primo elemento // first element // conta da 0
}
function draw() {
  background(200);
  circle(x,y, 24);
  // un cerchio per ogni elemento dell' array
fill(0,32);
noStroke();
  for(let i = 0; i<xx.length; i++){
    let d = map(i,0, xx.length, 2,64)
    circle(xx[i], yy[i], d);
  }
  if(xx.length < 500){
    xx.push(mouseX);
    yy.push(mouseY);
  }
  
  // x = mouseX;
}

function keyTyped(){
  console.log(key);
  xx.push(random(w)); // random(max)
  yy.push(random(w));
}

