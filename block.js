class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution :0.4,
          friction :0.0,           
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed >3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{
        push();
        this.visiblity = this.visiblity - 5;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
    }

 }