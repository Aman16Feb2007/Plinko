class Ball{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);
        this.radius = r;
        //this.color = color(random(0,225), random(0,225), random(0, 225));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        

    }


}