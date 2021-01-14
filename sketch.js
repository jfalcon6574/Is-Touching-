var r1,r2 , s1,s2




function setup() {


  


  createCanvas(800,400);

r1 = createSprite(200,300,50,50)
r2 = createSprite (300,200,50,50)
s1 = createSprite (400,100,50,50)
s2 = createSprite (400,350,50,50)
s1.velocityY = +1
s2.velocityY = -1
s1.shapeColor = "blue"
s2.shapeColor = "orange"

  
}


function draw() {
  background("Purple");  

  r1.x = mouseX 
  r1.y = mouseY
  if (r1.x - r2.x < r1.width/2 + r2.width/2 && r2.x - r1.x < r1.width/2 + r2.width/2 && r1.y - r2.y < r1.height/2 + r2.height/2 && r2.y -r1.y <r1.height/2 + r2.height/2){
   r1.shapeColor = "green"
   r2.shapeColor = "blue"
  
  }



  else {
    r1.shapeColor = "Orange"
    r2.shapeColor = "pink"
  }
  if (s1.x - s2.x < s1.width/2 + s2.width/2 && s2.x -s1.x < s1.width/2 + s2.width/2){
    s1.velocityX = s1.velocityX * (-1)
    s2.velocityX = s2.velocityX * (-1)
  }
  if (s1.y - s2.y < s1.height/2 + s2.height/2 && s2.y - s1.y < s1.height/2 + s2.height/2){
    s1.velocityY = s1.velocityY * (-1)
    s2.velocityY = s2.velocityY * (-1)

  }


  drawSprites();
}