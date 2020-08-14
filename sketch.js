function setup() {
  createCanvas(800,400);
 var ground = createSprite(400, 400, 800, 50);
 ground.shapecolor = "brown"
 var pillar1 = createSprite(200,375,50,200)
 var pillar2 = createSprite(400,375,50,200)
 var roof1 = createSprite(300,275,250,50)
 var pillar3 = createSprite(225,175,50,200)
 var pillar4 = createSprite(375,175, 50, 200)
 var roof2 = createSprite(300,150, 400,50)
 var pillar5 = createSprite( 125, 100, 50, 100)
 var pillar6 = createSprite( 475, 100, 50, 100)
 var flagpole = createSprite(300,75,10,150)
 var flag = createSprite(325, 25, 75, 50)

} 

function draw() {
  background(255,255,255);  
  drawSprites();
}