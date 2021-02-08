var car,wall;
var speed,weight;

function setup() {
  
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(400,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  car.velovityX=speed;
  wall.shapeColor="white"
}

function draw() {
  background('black');  
  
   if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.05*weight*speed*speed/22503;
    if (deformation>180){
      car.shapeColor=color("yellow");
    }
      if (deformation<180 && deformation>100)
      {
            car.shapeColor=color("red")
      }
      if (deformation<100)
      {
        car.shapeColor=color("green")
      }
  }
  drawSprites();
  if (keyDown("RIGHT_ARROW")){
    car.velocityX=  random(55,90)
  }
}

