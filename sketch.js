//creates variables 
var helicopterIMG, helicopterSprite;
var packageIMG,packageSprite;
var packageBody,ground;
var box1,box2,box3;

//creates constants - engine, world, bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload() {
	
	//load's helicopter image
	helicopterIMG = loadImage("helicopter.png");
	
	//load's package image
	packageIMG = loadImage("package.png");

}

function setup() {
	
	//creates the canvas
	createCanvas(800, 700);
	
	//changes the rectmode to center
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.15;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,20,{restitution : 0.5, isStatic : true});
	World.add(world,packageBody);
	
	ground = Bodies.rectangle(width/2,650,width,15,{isStatic : true});
 	World.add(world,ground);

	//create the boxes
	box1 = new Box(400,650,200,20);
	box2 = new Box(310,610,20,100);
	box3 = new Box(490,610,20,100);
	
	//update "Engine" with the "engine"
	Engine.run(engine);
  
}

function draw() {
  
  //sets background color to black
  background(0);
  
  //make position of package sprite to match the package body
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  //calls keyPressed() function
  keyPressed();
  
  //displays boxes
  box1.display();
  box2.display();
  box3.display();

  //creates text
  textSize(25);
  text("Press Down Arrow Key To Drop The Pakage", 150,80);
 
  //function to draw sprites
  drawSprites();

}

function keyPressed() {
 
	//if the down arrow is pressed, the static of the package body becomes false
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	  
}