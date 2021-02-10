function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
drawSprites()}

constructor(body1,body2,offsetX,offsetY0)
{
  this.offsetX = offsetX
  this.offsetY = offsetY 
   var options = {
   bodyA:body1,   
   bodyB:body2, 
pointB:{x:this.offsetX, y:this.offsetY}
   }
   //console.log(options);
    this.rope = constraint.create(options)
    World.add(world,this.rope)

}

rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

display()
{
var pointA = this.rope.bodyA.position;
var pointB = tis.rope.bodyB.position;

strokeWeight(2);

var Anchor1X = pointA.x
var Anchor1Y = pointA.y

var Anchor2X = pointB.x + this.offsetY
var Anchor2X = pointB.y + this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}









