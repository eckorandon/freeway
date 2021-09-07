let imageRoad;
let imageCar1;
let imageCar2;
let imageCar3;
let imageActor1;

function preload(){
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
  image(imageActor1, 100, 366, 30, 30);
  image(imageCar1, 420, 40, 50, 40);
}
