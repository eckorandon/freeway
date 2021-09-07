//Background
let imageRoad;

let widthCar = 50;
let heightCar = 40;

//Car 1
let imageCar1;
let xCar1 = 600;
let yCar1 = 40;

//Car 2
let imageCar2;
let xCar2;
let yCar2;

//Car 3
let imageCar3;
let xCar3;
let yCar3;

//Actor 1
let imageActor1;
let xActor1 = 100;
let yActor1 = 366;

function preload() {
  imageRoad = loadImage("images/road.png");
  imageCar1 = loadImage("images/car1.png");
  imageCar2 = loadImage("images/car2.png");
  imageCar3 = loadImage("images/car3.png");
  imageActor1 = loadImage("images/actor1.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imageRoad);
  showActor1();
  moveActor1();
  showCar1();
  moveCar1();
}

function showActor1() {
  image(imageActor1, xActor1, yActor1, 30, 30);
}

function showCar1() {
  image(imageCar1, xCar1, yCar1, widthCar, heightCar);
}

function moveActor1() {
  if(keyIsDown(UP_ARROW)) {
     yActor1 -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
     yActor1 += 3;
  }
}

function moveCar1() {
  xCar1 -= 2;
  if (xCar1 == - widthCar){
    xCar1 = 600;
  }
}