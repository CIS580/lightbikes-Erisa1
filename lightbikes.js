var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed=1/16/1000;

var x=0;
var y=0;

var input = {
  up: false,
  left: false,
  down: false,
  right: false
}
window.onkeydown= function(event){
event.preventDefault();
  switch(event.keyCode){
    //UP
    case 38:
    case 87:
    input.up= true;
    break;
    //LEFT
    case 37:
    case 65:
    input.left =true;
    break;
    //RIGHT
    case 39:
    case 68:
    input.right =true;
    break;
    //DOWN
    case 40:
    case 83:
    input.down= true;
    break;
  }
  return false;
}

window.onkeyup= function(event){
event.preventDefault();
  switch(event.keyCode){
    //UP
    case 38:
    case 87:
    input.up= false;
    break;
    //LEFT
    case 37:
    case 65:
    input.left =false;
    break;
    //RIGHT
    case 39:
    case 68:
    input.right =false;
    break;
    //DOWN
    case 40:
    case 83:
    input.down= false;
    break;
  }
  return false;
}
function loop(){
ctx.fillRect(x, y, 50, 50);
ctx.fillStyle= "purple";
if(input.up) y -=1;
if(input.down) y +=1;
if(input.left) x -=1;
if(input.right) x +=1;

setTimeout(loop,speed);
}
loop();
