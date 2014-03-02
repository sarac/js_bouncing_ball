// Define a class like this
function Ball( x, y){

  this.x = x ;
  this.y = y ;
  
  this.radius = 15 ;
  this.color = "red" ;
  
  // Velocity components
  this.vx= 1;
  this.vy= 1;
  
}

// Add methods like this.  All Person objects will be able to invoke this
Ball.prototype.draw = function(ctx){

    // here we now draw the associated shadow
    shadow_scale = this.radius/(1+(H - this.radius -this.y)/100) * 1.8
    drawEllipseByCenter(ctx,this.x, H, shadow_scale , shadow_scale*0.6 )
    // ctx.beginPath();
    // ctx.arc(this.x, H, this.radius/(1+(H - this.radius -this.y)/100) , 0, Math.PI*2, false);
    // ctx.fillStyle = "grey";
    // ctx.fill();
    // ctx.closePath();

    // Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
}


Ball.prototype.move = function(ctx){
   // Now, lets make the ball move by adding the velocity vectors to its position
    this.y += this.vy;
    this.x += this.vx;

    // Ohh! The this is moving!
    // Lets add some acceleration
    this.vy += gravity;

    //Perfect! Now, lets make it rebound when it touches the floor
    if(this.y + this.radius > H) {

      if ( Math.abs(this.vy) < min_bounce_speed) {
        this.vy = 0;
        this.y = H - this.radius;
      } else {
        // First, reposition the this on top of the floor and then bounce it!
        this.y = H - this.radius;
        this.vy *= -bounceFactor;
        // The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
        audio_bounce.play();
      }
    }

    // Finally check if the this exits the canvas
    if (this.x > ctx.canvas.width) {
      this.x = 0;
      this.y = 0; 
    }    
}
