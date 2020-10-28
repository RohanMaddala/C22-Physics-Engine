//namespacing or alias
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create(); //create my own Physics engine
  myWorld = myEngine.world ;  //world that is created as part of physics engine

  var ground_options = {
    isStatic : true
  }


  ground = Bodies.rectangle (200,390,400,20, ground_options);  
  World.add(myWorld,ground );
  console.log(ground);

  var ball_options = {
    isStatic : false,
    restitution : 1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld, ball);
  
  
}

function draw() {
  background("black");  

  Engine.update(myEngine);

  console.log(ground.position.x);
  console.log(ground.position.y);

  fill("brown");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  fill("white")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
}