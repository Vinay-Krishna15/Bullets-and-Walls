var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 200, 85, 30);
 
  bullet.velocityX=speed;
  
  bullet.shapeColor=color(255,255,255);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(255,255,250);

}

function draw() {
  background(0);  
  
if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

  
  if(damage>10)
  {
      wall.shapeColor=color("green");
  }

  if(damage<10)
  {
      wall.shapeColor=color("red");
  }
}
   drawSprites();
}

function hasCollided (lbullet,lwall)
{

    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}
