const elemento = document.getElementById('ExampleCanvas');
const ctx = elemento.getContext('2d');
ctx.beginPath();
ctx.arc(200,200,190,0,2 * Math.PI)
ctx.stroke();
