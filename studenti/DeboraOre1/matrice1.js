let w= 600;

function setup() {
    createCanvas(w, w);
}

function draw() {
    background(220);
  
    let n=10 //numero di linee
    let m= w/n //distanza linee
  
  for(let fila=0; fila<n; fila++){ //griglia di linee
    line (0, fila*m, w, fila*m); //vert
    line (fila*m, 0, fila*m, w); //orizz
    
  for(let col=0; col<n; col++){
    let i= (fila*n/4)+col;
    
    let v = map(i,0,n*n,255,0); //scala di grigi da bianco a nero
    let b = map(i,0,n*n,0,255); //scala di grigi da nero a bianco

    fill(b);
    beginShape(); //rombo
    vertex(col*m + m/2, fila*m + m); //vertice in basso
    vertex(col*m + m, fila*m + m/2); //vertice a sinistra
    vertex(col*m + m/2,fila*m); //vertice in alto
    vertex(col*m, fila*m + m/2); //vertice a destra
    endShape (CLOSE);
    
    fill(v);
    circle(col*m, fila*m,i);
    fill(v);
    circle(col*m + m/2, fila*m + m/2, i); //cerchio che aumenta

  }
  }
}