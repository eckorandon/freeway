//Actor 1
let xActor1 = 100;
let yActor1 = 366;

function showActor1() {
  image(imageActor1, xActor1, yActor1, 30, 30);
}

function moveActor1() {
  if(keyIsDown(UP_ARROW)) {
     yActor1 -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
     yActor1 += 3;
  }
}