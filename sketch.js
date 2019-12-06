var boy,ball;
var gameState;
var ground;
var reset;
function preload(){
boyimage=loadImage("iamakarsh.png");
ballimage=loadImage("bomb.png");
boy1image=loadImage("b.png");
reseting=loadImage("reset.png");
}
function setup() {
  createCanvas(1200,600);
gameState="play";
 boy= createSprite(600,300);
 reset=createSprite(30,30);
boy.addImage("boy",boyimage);
reset.addImage("reset",reseting);
ballgroup=createGroup();
ball1group=createGroup();
ball2group=createGroup();
ground=createSprite(600,580,1200,1);
ground.visible=false;
//boy.debug=true;
score=0;
boy.setCollider("rectangle",0,0,50,80);
}
function draw() {
  background(0, 173, 188); 
//reateEdgeSprites();
text("Score:"+score,50,50);
text("Use WSAD to move",1000,50);
console.log(gameState);
if(gameState==="play"){
  score+=Math.round(setFrameRate()/60);
//boy.velocityY=10; 
if(keyCode===97){
  boy.velocityX=-6;
}
if(keyCode===100){
  boy.velocityX=6;
}
if(keyCode===119){
  boy.velocityY=-6;
}
boy.velocityY+=0.5; 
if(ballgroup.isTouching(boy)||ball1group.isTouching(boy)||ball2group.isTouching(boy)||boy.isTouching(ground)){
gameState="end";
}
spawnball();
}
if(gameState==="end"){
  boy.setVelocity(0,0);
  boy.addImage("boy1",boy1image);
  ballgroup.setVelocityYEach(0);
  ball1group.setVelocityYEach(0);
  ball2group.setVelocityYEach(0); 
  ballgroup.setLifetimeEach(-1);
  ball1group.setLifetimeEach(-1);
  ball2group.setLifetimeEach(-1);
  
}
if (mousePressedOver(reset)){
  restart();
 }

  drawSprites();
}
function restart(){

  ballgroup.destroyEach();
  ball1group.destroyEach();
  ball2group.destroyEach();
  boy.addImage("boy",boyimage);
  score=0;
  gameState="play";
  boy.x=600;
  boy.y=300;
  }
  //boy.collide(bottomEdge);
function spawnball(){
if(World.frameCount%60===0){
  ball=createSprite(0,0);
var rand=Math.round(random(10,400));
var rand2=Math.round(random(420,800));
var rand3=Math.round(random(820,1180));
ball.x=rand;
ball1=createSprite(420,0);
ball1.x=rand2;
ball2=createSprite(820,0);
ball2.x=rand3;
ball.velocityY=4;
ball1.velocityY=6;
ball2.velocityY=2;
ball.addImage("ball",ballimage);
ball1.addImage("ball",ballimage);
ball2.addImage("ball",ballimage);
ballgroup.add(ball);
ball1group.add(ball1);
ball2group.add(ball2);
}
}
