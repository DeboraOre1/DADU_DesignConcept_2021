let w = 600;
let ramo1;
let albero = []; // contenitore di rami

function setup() {
  createCanvas(w, w);
  angleMode(DEGREES);
  ramo1 = new ramo(w/3, w-100, -80,240); /// x,y,a,l
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

}

function keyTyped(){
  console.log(key);
  // nuova generazione // iterazione
  let num = albero.length; // alberi esistenti ora
  for(let i = 0; i < num; i++){
    // é nuovo ?
    if(albero[i].new){
      // aggiungi rami
      let xx = albero[i].x2; // la fine del ramo
      let yy = albero[i].y2; // la fine del ramo
      let aa = albero[i].a; //angolo
      let nuovoRamo = new ramo(xx, yy, random(-120, -60), 36);
      // lo aggiungo all'albero
      albero.push(nuovoRamo);

      // non é più nuovo
      albero[i].new = false;
      
    }
  }
}

// crea oggetti del tipo "ramo"
// creates objects of the kind "branch"
function ramo(x1, y1,a,l){
    this.l = l; // length
    this.a = a;
    this.x1 = x1; // starting point // punto di partenza
    this.y1 = y1;
    this.new = true;
    this.x2 = this.x1 + (cos(this.a) * this.l);
    this.y2 = this.y1 + (sin(this.a) * this.l);
    this.display = function(){
        line(this.x1,this.y1,this.x2,this.y2);
         circle(this.x2,this.y2,8);
    }

}