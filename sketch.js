
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball1,ground;
var box1,box2,box3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball1=new Ball(30,450,30);
  ground=new Box(600,470,1200,25)
   box1=new Box(910,420,20,100);
	box2=new Box(1090,420,20,100);
	box3=new Box(1000,450,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  keypressed();
  drawSprites();

}

function keypressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-8});

}
}

