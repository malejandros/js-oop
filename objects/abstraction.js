//  Abstraction -> Hide the details, show the essentials
function Circle2(radius) {
  this.radius = radius;
  this.defaultLocation = {
    x: 0,
    y: 0
  };
  this.computeOptimeLocation = function () {
    // ...
  };
  this.draw = function () {
    this.computeOptimeLocation();
    console.log('draw');
  };
}

const circle = new Circle2(8);