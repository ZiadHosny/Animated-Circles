var canvas = document.querySelector('canvas');
var w = (canvas.width = window.innerWidth);
var h = (canvas.height = window.innerHeight);
var c = canvas.getContext('2d');
var i;
var CircleArray = [];
var g = c.createLinearGradient(0, 0, 0, canvas.height);
g.addColorStop(0.0, 'blue');
g.addColorStop(0.1, 'black');
g.addColorStop(0.2, 'blue');
g.addColorStop(0.3, 'black');
g.addColorStop(0.4, 'blue');
g.addColorStop(0.5, 'black');
g.addColorStop(0.6, 'blue');
g.addColorStop(0.7, 'black');
g.addColorStop(0.8, 'blue');
g.addColorStop(0.9, 'black');
g.addColorStop(1.0, 'blue');

function Background() {
  'use strict';
  var g = c.createLinearGradient(0, 0, 0, canvas.height);
  g.addColorStop(0.0, 'black');
  g.addColorStop(0.1, 'blue');
  g.addColorStop(0.2, 'black');
  g.addColorStop(0.3, 'blue');
  g.addColorStop(0.4, 'black');
  g.addColorStop(0.5, 'blue');
  g.addColorStop(0.6, 'black');
  g.addColorStop(0.7, 'blue');
  g.addColorStop(0.8, 'black');
  g.addColorStop(0.9, 'blue');
  g.addColorStop(1.0, 'black');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
}

function DrawCircle(x, y, r, dx, dy) {
  'use strict';
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;
  this.Draw = function () {
    c.beginPath();
    c.fillStyle = g;
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
    if (this.x + this.r > w || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > h || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}
function Animation() {
  'use strict';
  var c = new Background();
  for (i = 0; i < CircleArray.length; i += 1) {
    CircleArray[i].Draw();
  }
  window.requestAnimationFrame(Animation);
}
for (i = 0; i < 100; i += 1) {
  var r = Math.random() * 40;
  var dx = Math.random() * 9;
  var dy = Math.random() * 6;
  var x = Math.random() * (window.innerWidth - 2 * r) + r;
  var y = Math.random() * (window.innerHeight - 2 * r) + r;
  CircleArray.push(new DrawCircle(x, y, r, dx, dy));
}
window.requestAnimationFrame(Animation);
