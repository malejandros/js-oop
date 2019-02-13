// Value types (primitives) -> Number, String, Boolean, Symbol, undefined, null
// References types (objects) -> Object, Function, Array

// Primitives are copied by their value
let x = 10;
let y = x;

x = 20;

// References types, Objects are copied by their reference
let a = {
  value: 10
};
let b = a;

a.value = 20;

let number = 10;
let obj = {
  value: 10
};

function increse(number) {
  number++;
  console.log('number inside function:', number);
}

function increse2(obj) {
  obj.value++;
}

increse(number);
increse2(obj);