class Ground{
    constructor(){
      var order1={
          isStatic: true
      }
     this.ground = Bodies.rectangle(600,600,1200,30,order1);
      World.add(world,this.ground);
     
  
  }
  display(){
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,1300,20);
  }
  
  
  }