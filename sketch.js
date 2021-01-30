const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies   = Matter.Bodies; 

var engine,world;
var object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  object = Bodies.rectangle(200,390,400,20,options);
  World.add(world,object);

  console.log(object);
  
   var attr = {
   restitution : 0.8
  }
  ball = Bodies.circle( 200,200,25,attr);
  World.add(world,ball);

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 25,25);
}