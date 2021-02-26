class Bob {
     
    constructor(x,y){
        var Options = {
            //isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x,y,25,Options);
        this.radius=25;
        World.add(world,this.body);
           
       

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}