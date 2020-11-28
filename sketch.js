
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var boxLeft,boxRight,boxCentre;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper= new Paper(10,15,20);

  ground =new Ground(400,690,800,20);
   boxLeft =new Box(600,630,20,100);
   boxRight =new Box(700,630,20,100);
   boxCentre =new Box(650,675,100,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  ground.display();
  boxLeft.display();
  boxRight.display();
  boxCentre.display();
  keyPressed();
}
function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-15})

  }
}


