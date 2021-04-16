let w = 600;
let triangoli = [];
let cerchi = [];


function setup() {
  createCanvas(w, w);
  strokeWeight(1);
  stroke(0);
  noFill();
  let triangle1 = new triangolo(250,550,200,600, 300,600,);
  triangoli.push(triangle1); // push -> aggiunge alla fine

  let cerchio1 = new cerchio(250,550,10);
  cerchi.push(cerchio1);
}


function draw() {
  background(220);
  
  // disegna tutti i triangoli
  for(let i = 0; i < triangoli.length; i++){
    triangoli[i].display();
  }
  //disegna tutti i cerchi
  for(let f=0; f< cerchi.length; f++){
  cerchi[f].display();
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
            // due nuovi triangoli
              // il primo
              let nx1 = triangoli[i].x1; // vertice 1
              let ny1 = triangoli[i].y1;
              
              let nx2 = triangoli[i].x1 - random(-50,50); // vertice 2
              let ny2 = triangoli[i].y1 + random(-100,-80);
               
              let nx3 = nx1 + random(-80,80) // dalle parti di v 1
              //let ny3 = ny1 + random(-90, 90) ;
              let ny3 = triangoli[i].y1 + random(-80,20);

              let nuovo_1 = new triangolo(nx1, ny1, nx2, ny2, nx3, ny3);
              triangoli.push(nuovo_1);
              
              // il secondo
              let nx4 = nx1 + random(-120,200) // dalle parti di v 2
              let ny4 = ny1 + random(-90, 90) ;
              //let nx4 = nx2 - 100; 
              //let ny4 = ny2 -50;
              let nx5 = nx2 + 40;
              let ny5 = ny3 + random (50,100);

              let nuovo_2 = new triangolo(nx2, ny2, nx5, ny5, nx4, ny4);
              triangoli.push(nuovo_2);
              
              
          }

        }
              let b = cerchi.length; //  esistenti ora
  
               for(let f = 0; f < b; f++){
                    // é nuovo ?
                    if(cerchi[f].new == true){
                    
                    // cerchi che partono da un vertice dei triangoli
        
                    // nuovo cerchio 
                    cerchi[f].new = false;
                    let nxc = nx1 + random (30, 50); 
                    let nyc = ny1;
                    let nr = cerchi[f].r;
                    let nuovo_cerchio = new cerchio(nx1, ny1, nr);
                    cerchi.push(nuovo_cerchio);
                    
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
      triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3); 
    }
    
  }
  function cerchio(xc, yc, r){
    this.xc = xc;
    this.yc = yc;
    this.r = r;
    this.new = true;
  
  this.display = function(){
    circle(this.xc, this.yc, this.r); 
  }
    
   
}