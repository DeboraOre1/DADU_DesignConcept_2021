let w = 600;
let triangoli = [];
let t_attivo; // triangolo attivo
colorMode(HSB);

function setup() {
  createCanvas(w, w);
  strokeWeight(1);
  stroke(0);
  noFill();
  let triangle1 = new triangolo(300,400, 350,500, 200,550,);
  triangoli.push(triangle1); // push -> aggiunge alla fine
  angleMode(DEGREES);

  
}

function draw() {
  background(0);
  
  // disegna tutti i triangoli
  for(let i = 0; i < triangoli.length; i++){
    triangoli[i].display();
  }

}

function keyTyped(){
    console.log(key);
  
    // nuova generazione // interazione
    let num = triangoli.length; //  esistenti ora
  
    for(let i = 0; i < num; i++){
        // é nuovo ?
        if(triangoli[i].new == true){
            
            triangoli[i].new = false;
            // triangoli che partono dal precedente
          
            // il triangolo su cui lavoriamo
            t_attivo = triangoli[i];

            // nuovo triangolo
            // vertice in comune
            let nx1 = t_attivo.x1; // vertice 1
            let ny1 = t_attivo.y1;
          
            // sceglie un lato -> vertice su un lato
            let r = random();
            let P2 = dueTerzi(t_attivo.x1,t_attivo.y1,t_attivo.x2,t_attivo.y2);
        
          
            if(r<0.5){
              console.log("altro lato");
              P2 = dueTerzi(t_attivo.x1,t_attivo.y1,t_attivo.x3,t_attivo.y3);
            } 
            
            
            let nx2 = P2.x;
            let ny2 = P2.y;    
          
          
            // centro del triangolo
            let tc = CalculateCircleCenter(nx1, ny1, nx2, ny2, t_attivo.x3,t_attivo.y3);
          
          if(r<0.5){
              tc = CalculateCircleCenter(nx1, ny1, nx2, ny2, t_attivo.x2,t_attivo.y2);
            } 
          
            // punto medio sul lato
            let mx = (nx1 + nx2)/2;
            let my = (ny1 + ny2)/2;
            // angolo tra centro e pm
            let am = atan2(tc.y-my,tc.x-mx) + 180;
            // distanza tra centro e pm
            let dm = dist(tc.x, tc.y, mx, my);
          
            let nx3 = tc.x + cos(am)* dm*3;
            let ny3 = tc.y + sin(am)* dm*3;
          
            let nuovo_1 = new triangolo(nx3, ny3, nx1, ny1, nx2, ny2);
            triangoli.push(nuovo_1);
            
          
          //cambio colore ogni volta che aggiungo un triangolo
          let h = random (100,150);
          let b = random (30,70);
          let s = random (80);
          fill(h, s, b);
          }
      }
  }
  
  function triangolo(x1, y1, x2, y2, x3, y3){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.new = true;
    
    this.display = function(){
      stroke(0);
      strokeWeight(5);
      strokeCap(ROUND);
      
      triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3); 
    }
      
     
  }

function dueTerzi(x1,y1,x2,y2){
  let d = dist(x1,y1,x2,y2);
  let a = atan2(y2-y1,x2-x1);
  
   let dd = d * random(0.8, 1.2);
   // let dd = d/4*3;
  
  let xn = x1 + (cos(a)*dd);
  let yn = y1 + (sin(a)*dd);
  
  return {x:xn, y:yn};
}


// area di un triangolo
function area(x1, y1, x2, y2, x3, y3){
  return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
}

// punto dentro un triangolo
function isInside(x1, y1, x2, y2, x3, y3, x, y){
  
/* Calculate area of triangle ABC */
let A = area (x1, y1, x2, y2, x3, y3);
 
/* Calculate area of triangle PBC */
let A1 = area (x, y, x2, y2, x3, y3);
 
/* Calculate area of triangle PAC */
let A2 = area (x1, y1, x, y, x3, y3);
 
/* Calculate area of triangle PAB */   
let A3 = area (x1, y1, x2, y2, x, y);
     
/* Check if sum of A1, A2 and A3 is same as A */
return (A == A1 + A2 + A3); // tru or false
}

function CalculateCircleCenter(xa,ya,xb,yb,xc,yc){
    let yDelta_a = yb - ya; let xDelta_a = xb - xa;
    let yDelta_b = yc - yb; let xDelta_b = xc - xb;

    center = [];

    let aSlope = yDelta_a / xDelta_a;
    let bSlope = yDelta_b / xDelta_b;

    center.x = (aSlope*bSlope*(ya - yc) + bSlope*(xa + xb) - aSlope*(xb+xc) )/(2* (bSlope-aSlope) );
    center.y = -1*(center.x - (xa+xb)/2)/aSlope +  (ya+yb)/2;
    return center;
}
  

