let w = 600;
let n = 13; //n*n quadrati
let dati = []; //array vuoto

function setup() {
  createCanvas(w, w);

  //lancio la moneta 25 volte e registro il risultato

  for(let i = 0; i<(n*n); i++){
      dati.push(moneta());
  }

  console.log(dati);

}

function draw() {
  background(128);

  let m = w/n; //spazio tra le linee

    for(let fila=0; fila<n; fila++){
     
     strokeWeight(1);
     line(0, fila*m, w, fila*m); //orizzontali
     line(fila*m, 0, fila*m, w); //verticali

        for(let col = 0; col<n; col++){
          
          let x = col*m;
          let y = fila*m;
          let xc =  x + m/2;
          let yc = y + m/2;
          let i = fila*n + col; //valori da 0 a 24

          //circle (xc,yc,20);
         text(dati[i], xc,yc); // 
         
         strokeWeight(6);


         if(dati[i] == 0){
           // fai una cosa
           //line(x,y+m,x+m,y); //diagonale 1
           line(x+m/2, y, x+m/2, y+m); //vert

           } else {
           // fai una cosa diversa
           //line(x,y,x+m,y+m); //diagonale 2
           line();
           line(x, y+m/2, x+m, y+m/2); //orizz
         }
        }
    }
}
 

function keyTyped(){
    console.log(key);
    //moneta();
    creaDati();
  }


  //funzione che lancia moneta
  function moneta(){ 
    
    let risultato = random(1);
    if(risultato < 0.5){
        console.log("testa");
        return 1; 
    } else {
        console.log("croce");
        return 0;
    }

}


function creaDati(){
    //cancella dati esistenti
    dati = []; //crea n*n dati nuovi
   
    for(let i = 0; i<(n*n); i++){
        dati.push(moneta());
    }
  
    console.log(dati);
}