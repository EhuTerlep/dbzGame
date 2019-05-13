function barrier() {
  this.rand = Math.floor(Math.random() * 700)
   
      this.x = w -20;
      this.y = h - this.rand;
      this.gravity = -0.5;//force of grav
      this.lift = 10;//opposing the force of gravity
      this.velocity = 0;//Velocity of player
      
      this.show = function () {
        fill(color('red'))
        image(blast,this.x,this.y,200,50);
      }
         this.update = function() {
       this.velocity += this.gravity; //Gravity applied when not jumping
       this.x += this.velocity
       if (this.x > w) {// jumper hits the floor
         this.x = w;
         this.velocity = 0
       }
       if (this.x < 0){
           this.rand = Math.floor(Math.random() * 700)
         this.x =w;
         this.y = h - this.rand
         this.velocity = 0;
         
          }
      }
      }
