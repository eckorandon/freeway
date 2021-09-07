let widthCar = 50;
let heightCar = 40;

//Car 1
let xCar1 = 600;
let yCar1 = 40;

//Car 2
let xCar2;
let yCar2;

//Car 3
let xCar3;
let yCar3;

function showCar1() {
  image(imageCar1, xCar1, yCar1, widthCar, heightCar);
}

function moveCar1() {
  xCar1 -= 2;
  if (xCar1 == - widthCar){
    xCar1 = 600;
  }
}