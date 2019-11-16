// var options = {
//   numberOfBalls: 100,
//   ballBaseRadius: 10,
//   ballVariantRadius: 3,
//   ballBaseSpeed: 1,
//   ballVariantSpeed: 3,
//   particleColors: ["#EF476F", "#FFD166", "#06D6A0", "#FFFCF9"]
// };

// var w = window.innerWidth;
// var h = window.innerHeight;
// var wrapper = document.querySelector(".wrapper");

// function Ball() {
//   this.x = Math.floor(Math.random() * w);
//   this.y = Math.floor(Math.random() * h);
//   this.r =
//     options.ballBaseRadius +
//     Math.floor(Math.random() * options.ballVariantRadius);
//   this.speed =
//     options.ballBaseSpeed +
//     Math.floor(Math.random() * options.ballVariantSpeed);
//   this.angle = Math.floor(Math.random() * 360);

//   this.vector = {};
//   this.vector.x = Math.cos(this.angle) * this.speed;
//   this.vector.y = Math.cos(this.angle) * this.speed;

//   this.initDOM();
// }

// Ball.prototype.initDOM = function() {
//   var ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.left = this.x + "px";
//   ball.style.top = this.y + "px";
//   ball.style.width = this.r + "px";
//   ball.style.height = this.r + "px";
//   let index = Math.floor(Math.random() * options.particleColors.length);
//   ball.style.backgroundColor = options.particleColors[index];

//   this.domElement = ball;
//   wrapper.appendChild(ball);
// };
// Ball.prototype.updatePosition = function() {
//   this.x += this.vector.x;
//   this.y += this.vector.y;

//   if (this.x >= w || this.x <= 0) {
//     this.vector.x *= -1;
//   }
//   if (this.y >= h || this.y <= 0) {
//     this.vector.y *= -1;
//   }

//   if (this.x > w) this.x = w;
//   if (this.y > h) this.y = h;
//   if (this.x < 0) this.x = 0;
//   if (this.y < 0) this.y = 0;
// };

// Ball.prototype.updateDOM = function() {
//   this.domElement.style.left = this.x + "px";
//   this.domElement.style.top = this.y + "px";
// };

// var balls = [];
// for (let i = 0; i < options.numberOfBalls; i++) {
//   let ball = new Ball();
//   balls.push(ball);
// }

// requestAnimationFrame(updateFrame);

// function updateFrame() {
//   for (let i = 0; i < balls.length; i++) {
//     balls[i].updatePosition();
//     balls[i].updateDOM();
//   }
//   requestAnimationFrame(updateFrame);
// }

// window.addEventListener("resize", event => {
//   w = window.innerWidth;
//   h = window.innherHeight;
// });
