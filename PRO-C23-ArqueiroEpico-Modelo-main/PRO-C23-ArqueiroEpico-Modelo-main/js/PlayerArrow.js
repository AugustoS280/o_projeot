class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;

    // this.body = Bodies.rectangle(x, y, this.width, this.height);
    // this.body = Body.rectangle(x, y, this.width, this.height, options);
    // this.body = Bodies.rectangle(x, y, options);
     this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(){
    var sla = playerArcher.body.angle +90
    sla = sla * (3.14 /180)
    var sla2 = p5.Vector.fromAngle(sla)
    sla2.mult(0.4)
    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body, {x:sla2.x *(180/3.14),y:sla2.y *(180/3.14)})
  } //no original eu fiz do jeito certo mas ele saiu meio estranho então eu vi que não fizeram a conta do pi e do 180 graus
    //mas mesmo assim eu vi que não dava muito certo, então eu tive que voltar no código do canhão e vi que subtraiu, então tentei igualar a zero(o ângulo), depois disso foi certinho
    //obs: também mudei a mult porque ele não funcionava muito na 20 e queria que ela caisse um pouco
      display() {
      var pos = this.body.position;
      var angle = playerArcher.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle + 90);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}
