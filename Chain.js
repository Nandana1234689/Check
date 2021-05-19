class Chain {
constructor(x,y){
  var nandana ={
 bodyA:x , 
 pointB:y ,
 stiffness : 0.05 ,
 length : 15 
  }

this.chain=Constraint.create(nandana)
World.add(world,this.chain);

}
display(){

strokeWeight(7)

if( this.chain.bodyA ){
line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)

}

}

removeBird(){
 this.chain.bodyA=null
}



}
