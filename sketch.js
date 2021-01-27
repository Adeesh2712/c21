const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var object;
var ground,ball;



function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  ground_options={
    isStatic:true
  }
  ball_options={
restitution:1 

  }
ball = Bodies.circle(200,200,10,ball_options);
World.add(world,ball);

 ground = Bodies.rectangle(200,385,400,40,ground_options);
 World.add(world,ground);

console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);
 
}

function draw() {
  background(0);  

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}

