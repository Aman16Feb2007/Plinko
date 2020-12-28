class Particle{
    constructor(x,y){
        var options={
            restitution : 0.3
        }
        this.body = Bodies.circle(x,y,10,options); 
        this.radius = 10;
        this.color = color(random(0,225),random(50,200),random(100,250));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius,this.radius);
        pop();
    }


}