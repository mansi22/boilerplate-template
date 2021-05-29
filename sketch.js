const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var database;


function preload() {
 
}

function setup() {
  createCanvas(3000, 700);
  database=firebase.database();
  engine = Engine.create();
  world = engine.world;

  

}

function draw(){
  background("white");




  drawSprites();
  
}
