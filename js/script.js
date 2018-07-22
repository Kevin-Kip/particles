var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener('resize', () => {
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
