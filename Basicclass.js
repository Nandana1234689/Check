class Basicclass{
    constructor(a,b,c,d){
        var order={
            'restitution':0.8, 
            'friction':1, 
            'density':1

        }
        this.body = Bodies.rectangle(a,b,c,d,order);
        World.add(world,this.body);

        this.img = loadImage("image/base.png");

        this.width=c 
        this.height=d
    }
    display(){
        
         push();
         translate(this.body.position.x,this.body.position.y); 
         rotate(this.body.angle); 
         imageMode(CENTER); 
         image(this.img, 0, 0, this.width, this.height);
         pop()
    }

}
