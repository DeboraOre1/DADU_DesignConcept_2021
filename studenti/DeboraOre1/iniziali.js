let w=500
let g=40
let x= 230
let h=125

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(0,0,0);
  
  // lettera D: Debora
  //fill(128)
  //arc(w/2, w/2, h, h-5, PI+PI/2, PI/2,CHORD)//oppure metto -PI/2
  
  //fill(220)
  //arc(w/2+10, w/2, h-50, h-15, PI+PI/2, PI/2,CHORD)
  
  // lettera O: Ore
  //fill(220);
  //circle (ow,w/2,g-4)
  

  // lettera D: Debora
  strokeWeight (g-25)
  stroke(255,20,147,80)
  noFill()
  arc(w/2-80, w/2, h, h, PI+PI/2, PI/2,CHORD)
  
  //lettera O: Ore
  strokeWeight (g-25)
  stroke(255,20,147,80)
  noFill()
  circle (x,250,125-g)
  
}

function keyTyped(){
  // quando schiaccio un tasto
  
  console.log(key);
  h= random (100,200)
  x= random (230,350)
}
