var sleep;
var astronout;

function preload (){
  bg=loadImage("images/iss.png");
brush=loadImage("images/brush.png");

}

function setup() {
  createCanvas(400,400);
 
  astronout = createSprite(300,230);
  astronout.addAnimation("brushing",brush);
  astronout.scale=0.1;
 } 


function draw() {
 

  background(bg);
  drawSprites();  
 
 
}