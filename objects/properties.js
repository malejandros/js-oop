function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

const circle = new Circle(3);

// user.token = 'sdasdsa';
circle.location = {
  x: 1
};
console.log(circle);
// circle['location'] = {x:1};
// const propertyName = 'location';
// circle[propertyName] = {
//   x: 1
// };

delete circle.location;
// delete circle['location'];
console.log(circle);