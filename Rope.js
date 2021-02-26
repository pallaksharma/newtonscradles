class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY =offsetY;
        var op = {
            bodyA:bodyA,
            bodyB:bodyB,
        
            
        }
        this.rope=Matter.Constraint.create(op);
        World.add(world,this.rope);
    }
    display(){
         var pointA = this.rope.bodyA.position;
         var pointB = this.rope.bodyB.position;

         
    
         line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
         
    }
}


