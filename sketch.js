const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var division,plinko1,particle,ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240,790,480,20);
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  for(var k=0; k<=width; k=k+80){
    divisions.push(division = new Division(k,height-divisionHeight/2,10,divisionHeight));
    division.display();
  }
  for(var j=30; j=width-30; j=j+20){
    plinkos.push(plinko1 = new Plinko(j,75));
    plinko1.display();
  } 
  for(var j=5; j=width-5; j=j+20){
    plinkos.push(plinko2 = new Plinko(j,175));
    plinko2.display();
  } 
  for(var j=30; j=width-30; j=j+20){
    plinkos.push(plinko3 = new Plinko(j,275));
    plinko3.display();
  } 
  for(var j=5; j=width-5; j=j+20){
    plinkos.push(plinko4 = new Plinko(j,375));
    plinko4.display();
  }
   
   if(frameCount%60===0){
     particles.push(particle = new Particle(random(width/2-10,width/2+10), 10,10));
     particle.display();
   }

   ground.display();
   
  drawSprites();
}