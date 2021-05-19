const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var engine, world;
var ground, box,box2;
var bg
var gameState=0
function  preload() {
  bg=loadImage("image/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    x=5
     
    g=new Ground(600,580)
    bird = new Bird()
   
   

    
 

}
function draw(){
    background(0);
    image (bg,0,0,1200,600)
    Engine.update(engine);
    
    
   bird.display()
   g.display()
   console.log(gameState)
   textSize(40)
   fill(0)
text (gameState,100,100)

if (keyCode == 32 && gameState==0){
chain=new Chain (bird.body,{x:mouseX ,y:mouseY })
chain.display()
console.log(gameState)
gameState = 1

}

if(gameState == 1 && keyCode == 40){

  gameState = 0
  console.log(gameState)
}
   
   fill(255)
   text(mouseX+"   "+mouseY,mouseX,mouseY)

}
function mouseDragged(){

Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY })



}
function mouseReleased(){

    chain.removeBird()

}