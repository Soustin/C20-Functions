var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,200,80,30);
  car.shapeColor = "blue";
  car.velocityX = 6;
  wall = createSprite(1100,200,20,80);
  wall.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(car, wall);
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  return false;
}
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = -1 * object1.velocityX;
    }

  else if(object1.y - object2.y < object2.height/2 + object1.height/2
         && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = -1 * object1.velocityY;
  }   
}