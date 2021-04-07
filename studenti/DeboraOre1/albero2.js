let w = 600;
let ramo1; 
let albero = []; // contenitore di rami
let tuttelefoglie = []; // contiene le foglie

function setup() {
  createCanvas(w, w);
  angleMode(DEGREES);
  ramo1 = new ramo(w/2, w, -90); /// x,y,a,l
  albero.push(ramo1); // push -> aggiunge alla fine
}

function draw() {
  background(200);
  // test line
  // starts at the bottom // 90 degrees // lenght 120 px
  strokeWeight(6);
  // line(w/2, w, w/2, w- 120);
  //ramo1.display();
  
  // disegna tutti i rami dell'albero
  // albero.lenght = luinghezza dell'albero /// num di rami ...
    for(let i = 0; i < albero.length; i++){
      albero[i].display();
    }
    for(let i = 0; i < tuttelefoglie.length; i++){
      tuttelefoglie[i].display();
    }

}

function keyTyped(){
  console.log(key);
  // nuova generazione // interazione
  let num = albero.length; // alberi esistenti ora
  for(let i = 0; i < num; i++){
      // é nuovo ?
      if(albero[i].new == true){
          // aggiungi rami
          albero[i].new = false;
          // due nuovi rami che partono dal precedente
          // l'inclinazione è casuale  
          for(let n = 0; n<2 ; n++){
              //let a = albero[i].a -30 + (n*30); // new angle
              let a = albero[i].a -30 + (n*30) + random(-15,15); // new angle
              let nuovo = new ramo(albero[i].x2, albero[i].y2, random(a/2, a));
              albero.push(nuovo);
            }
        }
    }
}


// crea oggetti del tipo "ramo"
function ramo(x1, y1,a,l){
    this.l = w/5; // length
    this.a = a;
    this.x1 = x1; // punto di partenza
    this.y1 = y1;
    this.new = true;
    this.x2 = this.x1 + (cos(this.a) * this.l);
    this.y2 = this.y1 + (sin(this.a) * this.l);
   
    // crea le foglie
    nuoveFoglie(this.x2,this.y2);

    this.display = function(){
        stroke(0);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }

}

function fiore (x,y) { //fiori con forma di cerchi rosa 
  this.x = x;
  this.y = y;
  this.r = 2 + random(8);

  // disegna il ramo 
  this.display = function(){
      noStroke();
      fill(200,0,0);
      circle(this.x,this.y,this.r - 10 );
  }

}

function nuoviFiori(xc,yc){
   
  for(let i = 0; i < 20 ; i++){

      let a = random(360); // angolo
      let r = random(60); // raggio
      let x = xc + (cos(a)*r);
      let y = yc + (sin(a)*r);

      let nuova = new foglia(x,y);
      tuttelefoglie.push(nuova);

  }
} 

function foglia(x,y) {
    this.x = x;
    this.y = y;
    this.r = 2 + random(8);

    // disegna il ramo 
    this.display = function(){
        noStroke();
        fill(0,200,0);
        circle(this.x,this.y, 2*(this.r));
      
    }

}


function nuoveFoglie(xc,yc){
    // crea 64 foglie intorno a un determinato punto xc,yc
     
    for(let i = 0; i < 40; i++){

        let a = random(360); // angolo
        let r = random(60); // raggio
        let x = xc + (cos(a)*r);
        let y = yc + (sin(a)*r);

        let nuova = new foglia(x,y);
        tuttelefoglie.push(nuova);

    }
} 

