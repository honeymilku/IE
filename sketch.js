function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  
   if(mouseIsPressed==true){
     stroke(mouseX, 0, mouseY);
     strokeWeight(11);
     point(mouseX-5, mouseY-5);
     point(mouseX*-1+600, mouseY-5);
     point(mouseX*-1+600, mouseY*-1+400)
     point(mouseX-5, mouseY*-1+400)
     
     
     
   }
  
  
  
}