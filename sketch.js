function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black"); 
   rect (200,200,40,200);
   rect (400,200,40,200);
   triangle(200,200,440,200,320,150);
   rect (100,100,40,300);
   rect (500,100,40,300);
   triangle (100,100,540,100,320,150);
   
    
  drawSprites();
}