class boy{
constructor(x,y,width,height){
    this.man = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
    "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
                                                                    
var options={
    'restitution':0.8,
    'friction':1.0,
    'density':1.0,
    'isStatic':false
}

this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world,this.man);



}

}