var pathImg, path;
var jax, jaxImg;
var invisibleGround, unvisibleGround;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jaxImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  jax = createSprite(300,300,10,50);
  jax.addAnimation("Running Man", jaxImg);
  jax.scale = 0.05;

  invisibleGround = createSprite(40,200,10,400);
  invisibleGround.visible = false;

  unvisibleGround = createSprite(360,200,10,400);
  unvisibleGround.visible = false;
}

function draw() {
  if(path.y > 400){
    path.y = height/2;
  }

  jax.x = World.mouseX;

  jax.collide(invisibleGround);
  jax.collide(unvisibleGround);

  drawSprites();
}
