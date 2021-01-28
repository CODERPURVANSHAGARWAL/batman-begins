const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  //  boyimg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
//"walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
   this. man= new boy(1000,400,50,50)
    
 // ball = Bodies.circle(50, 200, 20);
 //World.add(world, ball);
}

function draw(){
    background("black")
    Engine.update(engine);
  //this. man.display()
  //imageMode(CENTER);
  // image(boyimg, ball.position.x, ball.position.y, 50, 45);
}   

