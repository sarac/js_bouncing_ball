// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

// Now setting the width and height of the canvas
var W = 350,
    H = 450;

// Applying these to the canvas element
canvas.height = H; canvas.width = W;

// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

var gravity      = 0.2,
    xwind        = 0.2,
    bounceFactor = 0.7,
    min_bounce_speed   = 0.5;

var audio_bounce = document.getElementById('audio_bounce');

var ball2 = new Ball(W/2,75)
var ball1 = new Ball(W/4,50)
ball2.color='yellow'

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.
// So, lets create a function that will do it for us.
function clearCanvas() {
  ctx.clearRect(0, 0, W, H);
  // reseize  canvas to be full page
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// A function that will update the position of the ball is also needed. Lets create one
function update() {
  clearCanvas();
  ball1.draw(ctx);
  ball2.draw(ctx);
  ball1.move(ctx);
  ball2.move(ctx);
}

// Now, the animation time!
// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.
setInterval(update, 1000/60);

// This completes the tutorial here. Try experimenting with different values to get a better understanding.

// Also, try playing with the x-component of velocity ;)
