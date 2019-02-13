// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    }
  };
}

function Circle(radius) {
  // console.log('this', this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle1 = createCircle(1);
const circle2 = new Circle(2);