const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
var box1,box2,box3,box4,box5;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  
 // ground = Bodies.rectangle(200,100,50,50,object_options);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  box1 = Bodies.rectangle(100,100,50,50);
  World.add(world,box1);

  box2 = Bodies.rectangle(50,100,20,60);
  World.add(world,box2);

  box3 = Bodies.rectangle(180,150,80,30);
  World.add(world,box3);

  box4 = Bodies.rectangle(220,50,40,50);
  World.add(world,box4);

  box5 = Bodies.rectangle(260,100,80,50);
  World.add(world,box5);
  
 

  ball = Bodies.circle(200,100,20);
  World.add(world,ball);
 // console.log(ball);
 
  
  //console.log(ground);
 // console.log(ground.position.x);
 // console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ball.position.x=mouseX;
  ball.position.y=mouseY;
 
  fill("brown"); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  fill("green");
  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,50,50);
 fill("red");
  rectMode(CENTER);
  rect(box2.position.x,box2.position.y,20,60);
 rectMode(CENTER);
  fill("pink");
  rect(box3.position.x,box3.position.y,80,30);
  rectMode(CENTER);
  fill("yellow");
  rect(box4.position.x,box4.position.y,40,50);
 fill("orange");
  rectMode(CENTER);
  rect(box5.position.x,box5.position.y,80,50);

  
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 
}