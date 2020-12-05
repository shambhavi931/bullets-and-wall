var bullets
var wall
var speed
var weight
var thickness

function setup(){
    createCanvas(1600,400)

    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)

    bullets=createSprite(50,200,50,20)
    bullets.velocityX=speed
    bullets.shapeColor="white"

    wall=createSprite(1200,200,thickness,height/2)
    wall.shapeColor="80,80,80"
    
    
}
function draw(){
    background("black")
   bullets.collide(wall);

   function hasCollided(lbullets, lwall)
   {
     bulletsRightEdge=lbullets.x+lbullets.width;
     wallLeftEdge=lwall.x
     if(bulletsRightEdge>=wallLeftEdge)
   {
     return true;
   }
    return false;
  }
   if(hasCollided(bullets,wall))
   {
     bullets.velocityX=0
     var damage=0.5*weight * speed * speed/(thickness * thickness * thickness);
     if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10)
     {
       wall.shapeColor=color(0,255,0)
     }
    }
  
    drawSprites();
}