let angle=0;
let img;




function setup() {
  createCanvas(windowWidth, windowHeight);
  img=loadImage('assets/mmaiss.png')

}

function draw() {
  
  background(random(),3);
  
  noFill()
  noStroke()
  ellipse(windowWidth/2, windowHeight/2,10,10)
  
  if(mouseX >=windowWidth/2-5 && mouseX<=windowWidth/2+5 && mouseY >=windowHeight/2-5 && mouseY <=windowHeight/2+5 &&
    mouseIsPressed){
    f=true}else{
      f=false}
  if(f===true){
    background(random(255),30,30); 
    //noLoop()
  }else{
 
  push();
  translate(width/2,height/2);
  
  rotate(angle);
  scale(0.1*mouseX/50);

  //imageMode(CENTER);
  image(img,mouseX,mouseY);
  
  pop();
  angle+= radians(-50);}
 
  
}