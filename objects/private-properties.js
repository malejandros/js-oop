function Circle3(radius) {
  this.radius = radius;
  let defaultLocation = {
    x: 0,
    y: 0
  };
  let computeOptimeLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    computeOptimeLocation(0.1);
    // defaultLocation

    console.log('draw');
  };
}

const circle3 = new Circle3(8);