class Iron {
    constructor(x,y,width,height) {
      var options = {
         
          restitution: 0.9,
          friction: 0.9,
          density: 0.9
      }
      this.body = Bodies.rectangle(700,300,100,100,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };