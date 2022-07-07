var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 2.5;
  player = createSprite(300,300)
  player.addImage("standing",ghostImg)
  player.scale = 0.5
  doorsGroup = createGroup()
}
function obstacles(){
  if(frameCount%100==0){
door = createSprite(random(100,500),-10) 
door.velocityY=3
doorsGroup.add(door)
door.addImage ("doorImg",doorImg)
door.scale = 0.7
  }
}
function draw() {
  background("black");
  if(keyDown("RIGHT_ARROW")){
    player.x+=5
  }
  if(keyDown("LEFT_ARROW")){
player.x+=-5
  }
  if(gameState=="play"){
    if(tower.y > 400){
      tower.y = 300
    }
    drawSprites();
    if (keyDown("space")){
player.velocityY = -5
    }
    obstacles()
    player.velocityY+= 0.7

    if(player.isTouching(doorsGroup)){
gameState = "END"
    }
    if(player.y>600){
gameState = "GAMEOVER"
    }
  }
 else{
  textSize(32)
  fill ("yellow")
  text("GAME OVER",220,300)
 }
}
