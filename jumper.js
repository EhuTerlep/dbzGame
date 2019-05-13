 function jumper() {
      this.x = 50;
      this.y = 0;
      this.gravity = 0.5;//force of grav
      this.lift = -10;//opposing the force of gravity
      this.velocity = 0;//Velocity of player
      
      this.show = function () {
        image(goku,this.x,this.y,50,50);
      }
      this.up = function() {
       this.velocity += this.lift; //Jumping function
      }
      this.update = function() {
       this.velocity += this.gravity; //Gravity applied when not jumping
       this.y += this.velocity
       this.velocity *= 0.8; // air resistance
       if (this.y > h) {// jumper hits the floor
         this.y = h - 50;
         this.velocity = 0
       }
       if (this.y < 0){
         this.y =0;
         this.velocity = 0;
       }
      }
          this.move = function() {
        if ((keyIsDown(68)) && (this.x < w-50)) {//Right Arrow
          this.x += 5
        }
        if ((keyIsDown(65)) && (this.x > 50)) {//Left Arrow
          this.x -= 5
        }
          }
    }
  function keyPressed() {
      if (keyCode == 32){
        jumper.up();
      }
    if (keyCode == 82){
    location.reload();
    }
    }