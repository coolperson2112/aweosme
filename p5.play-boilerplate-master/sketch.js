

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  engine = Engine.create()
  world =  engine.world
  var option1 = {restitution:0.8}
ball = Bodies.circle(200,100,20,option1)
ball2 = Bodies.circle(400,50,50,option1)
World.add(world,ball)
World.add(world,ball2)
var options={isStatic:true}
ground = Bodies.rectangle(300,750,600,20,options)

World.add(world,ground)
rectt = Bodies.rectangle(400,300,70,150,option1)
World.add(world,rectt)
 
  createCanvas(600,800)

}


function draw() {
  Engine.update(engine)
  background(0);  
  ellipseMode(CENTER)
  fill("blue") 
  ellipse(ball.position.x,ball.position.y,20,20)
  fill("red")
  ellipse(ball2.position.x,ball2.position.y,50,50)
  fill("white")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,600,20)
  rect(rectt.position.x,rectt.position.y,70,150)
  drawSprites();
  
}