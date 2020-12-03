
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;


var world, engine;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var rectangle1;
var line1, line2, line3, line4, line5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	rectangle1 = new Rectangle(400,200,500,40);

ball1 = new Ball(340, 450, "White");
  ball2 = new Ball(400, 450, "White");
  ball3 = new Ball(460, 450, "White");
  ball4 = new Ball(520, 450, "White");
  ball5 = new Ball(580, 450, "White");


  line1 = new Line(ball1.body, { x: 340, y: 200 });
  line2 = new Line(ball2.body, { x: 400, y: 200 });
  line3 = new Line(ball3.body, { x: 460, y: 200 });
  line4 = new Line(ball4.body, { x: 520, y: 200 });
  line5 = new Line(ball5.body, { x: 580, y: 200 });



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  rectangle1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
  }



