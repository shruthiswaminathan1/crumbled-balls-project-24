const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject, groundObject; 
var engine,world;

function setup() {
	createCanvas(1600, 800);
	//rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	
	Engine.run(engine);
	}
 
function draw() {
	background(0);
 dustbinObj.display();
paperObject.display();
groundObject.display();
}

function KeyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-35});
	}

}

	