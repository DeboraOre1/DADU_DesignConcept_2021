let w= 600;
let h= 50
function setup() {
createCanvas(w, w);
}

function draw() {
  background(0);

  let n=5 //numero di linee
  let m= w/n //distanza 

   for(let fila=0; fila<n; fila++){     

       for(let col=0; col<n; col++){
        let i= (fila*n)+col;
        let x= col*m;
        let y= fila*m;
        let b= random(5,w/2);

               for(let raggio=0; raggio<n; raggio++){
                stroke(255);
                strokeWeight(0.5);
                fill(220,30);
                circle(x + m/2, y + m/2, raggio*m/2); //cerchi concentrici grigi

                fill(255,30); //cerchi rosa
                circle(x + m/2, y + m/2, m/n); 

                noFill();
                strokeWeight(n);
                stroke(255,20,147,70);
                circle(x + m/2, y + m/2,h);

               }
        }
   }
}

function keyTyped(){ //quando schiaccio un tasto creo i cerchi rosa con raggio casuale
  console.log(key);
  h=random(5,600);
}