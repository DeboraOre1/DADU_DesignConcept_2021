let w= 600;

function setup() {
    createCanvas(w, w);
}

function draw() {
    background(135,206,235);
  
    let n=10 //numero di linee
    let m= w/n //distanza linee
  
  for(let fila=0; fila<n; fila++){ //griglia di linee    
    //strokeWeight (4);
    //stroke (0);
    //line (fila*m, 0, fila*m, w); //vert
    //line (0, fila*m, w, fila*m); //orizz
    
  for(let col=0; col<n; col++){
    let i= (fila*n/4)+col;
    let d= map(i, 0, n*n, 2, m); //cambio dimensione square 1
    let v = map(i,0,n*n,255,0); //scala di grigi da bianco a nero
    let b = map(i,0,n*n,0,255); //scala di grigi da nero a bianco
    let x= col*m;
    let y= fila*m;
    let q = map(i,0,n*n, 8, 50)
    
    noStroke();
    fill(255);
    arc(x+m/2, y+m/2, w/n, w/n, PI/2, PI + PI/2, CHORD); //sinistra
    arc(x+m/2, y+m/2, w/n, w/n, - PI/2, -(PI + PI/2), CHORD); //destra
    
    fill(135,206,235);
    arc(x+m/2 + (n - n/5), y+m/2, w/n, w/n, PI/2, PI + PI/2, CHORD); //sinistra
    arc(x+m/2 - (n - n/5), y+m/2, w/n, w/n, - PI/2, - (PI + PI/2), CHORD); //destra
    

    
    fill(b);
    circle(col*m + m/2, fila*m + m/2, i); //cerchio che aumenta
  }
  }
}