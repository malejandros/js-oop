// Constructor function
function Circle(radius) {
  // console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle2 = new Circle(2);
circle2.draw();