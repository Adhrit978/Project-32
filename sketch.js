const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

let engine;
let world;

var ball;
var blower;
var blowermouth;

var button;

function setup() {
  createCanvas(800, 600);

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:false
  }
  ball=Bodies.circle(width/2, height/2-200, 44, options);
  World.add(world, ball);

  blower=createSprite(width/2, height/2+200, 100, 200);
  blowermouth=createSprite(width/2, height/2+100, 50, 30);

  button=createButton("Blow");
  button.position(width/2-22, height/2+160);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  fill("green");
  noStroke();
  ellipse(ball.position.x, ball.position.y, 44);
  
  drawSprites();
}

function blow() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}