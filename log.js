class Log1 {
    constructor(x,y){
        var object={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,200,20,object);
        this.width=200;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop ()
    
    }
    }