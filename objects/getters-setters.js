function Circle4(radius) {
  this.radius = radius;
  let defaultLocation = {
    x: 0,
    y: 0
  };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error('Invalid location');
      defaultLocation = value;
    }
  });
}

const circle4 = new Circle4(18);
circle4.draw();
console.log(circle4.defaultLocation);
circle4.defaultLocation = {
  x: 8,
  y: 10
};
console.log(circle4.defaultLocation);