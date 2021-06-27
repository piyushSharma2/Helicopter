var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var win,winImg;
var invisible;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	winImg=loadImage("win.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	
	package=createSprite(width/2, 200, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.7

	
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	invisible=createSprite(400,650, 200,20);
	invisible.visible=false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);

	win=createSprite(400,350,20,20)
	win.addImage(winImg);
	win.visible=false;
	win.scale=1

}

function draw() {
	package.collide(invisible)
    
	rectMode(CENTER);
	background(0);
  
	
	

	if(keyDown("right")){
		  helicopter.x=410
	  }
	  if(keyDown("left")){
		  helicopter.x=385;
	  }
	


	
   

if(keyDown("down")){
	package.velocityY=4
}
  
  drawSprites();
  
  
 
}
