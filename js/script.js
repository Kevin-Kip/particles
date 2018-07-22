var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', function () {
   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;
});

var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

var colorArray = [
    '#f57f17',
    '#9e9e9e',
    '#0d47a1',
    '#004d40',
    '#b71c1c'
];

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function randomDistance(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Particle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.03;
    this.distance = randomDistance(30, 300);
    var previous;

    this.update = function () {
        previous = {x: this.x, y:this.y};
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distance;
        this.y = y + Math.sin(this.radians) * this.distance;
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(previous.x, previous.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    };
}
var particleArray = [];
for (var i = 0; i < 200; i++){
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = (Math.random() * 2) + 3;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    particleArray.push(new Particle(x, y, radius, color));
}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255, 255, 255, 0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    for (var j = 0; j < particleArray.length; j++){
        particleArray[j].update();
    }
}

animate();
