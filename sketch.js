
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var girl, girl_running;
var background, invisibleBackround, BackgroundImage;

var rocksGroup, rock, rock1, rock2;

var score;


function preload(){
 // girl_running = loadAnimation( "girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png");
  
 girl_running = loadAnimation( "girl1.png");
  BackgroundImage = loadImage("background.png");

  rock = loadImage("rock.png")
  rock1 = loadImage("rock1.png");
  rock2 = loadImage("rock2.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  girl = createSprite(50,180,20,50);
  girl.addAnimation("running", girl_running);
 

  
  Background = createSprite(600,200);
  Background.addImage("ground",BackgroundImage);
  Background.x = Background.width /2;
  Background.velocityX = -4;
  
  invisibleBackground = createSprite(200,190,400,10);
  invisibleBackground.visible = false;
  
}
  // create rockgroup
  rocksGroup = createGroup();
  
  
  console.log("Hello" + 5);
  
  score = 0;
  



function draw() {
    background(255);
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){
    //move the Background
    Background.velocityX = -4;
    score = score + Math.round(frameCount/60);
    if (Background.x < 0){
      Background.x = Background.width/2;
    }
      if(keyDown("space")&& trex.y >= 100) {
        girl.velocityY = -13;
      }
      
      girl.velocityY = girl.velocityY + 0.8
      
     
      if(rocksGroup.isTouching(girl)){
        gameState=END
      }

  }
  else if(gameState === END){
    //stop the Background
    Background.velocityX = 0;
  rocksGroup.setVelocityXEach(0);
  rocksGroup.setVelocityYEach(0);
  }
  
  
  
  
  girl.collide(invisibleGround);
  
  
  //spawn rocks on the ground
  spawnRocks();
  
  drawSprites();
}

function spawnRocks(){
 if (frameCount % 60 === 0){
   var rock = createSprite(400,165,10,40);
   rock.velocityX = -6;

   
    // //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: rock.addImage(rock);
              break;
      case 2: rock1.addImage(rock1);
              break;
      case 3:rock2.addImage(rock2);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    rock.scale = 0.5;
    rock.lifetime = 300;
   
   //adding obstacles to the group
   rocksGroup.add(rock);
 }
}
    
  
