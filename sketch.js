const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ground,plane1;
var rubberru;
var iron;
var plane2;
var rubberru1;
var iron1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1200,30)
    hammer = new Hammer(10,100);
    plane1 = new Plane(400,100,100,100)
    rubberru = new Rubber(845,100,100,100);
    iron = new Iron(700,300,100,100)
    plane2 = new Plane(400,40,100, 100)
    rubberru1 = new Rubber(800,100,100,100);
    iron1 = new Iron(700,300,100,100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    ground.display();
    hammer.display();
plane1.display();
    rubberru.display();
 iron.display();
 plane2.display();
    rubberru1.display();
 iron1.display();

}