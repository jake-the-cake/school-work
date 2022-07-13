function main() {
  return blue();
}
function blue() {
  return red();
}
function red() {
  return "hello";
}
console.log(main());
var main = function () {
  return blue();
};
var blue = function () {
  return red();
};

var red = function () {
  return "hello";
};
console.log(main());
produce = [
  { fruit: "pear", cost: 3, stock: 5 },
  { fruit: "apple", cost: 2, stock: 3 },
];

let A = [1, 2, 3, 4];

// destructure object
let contact = { name: "fred", email: "fred@mit.edu", age: 33 };
let { name, age } = contact;
let person = { name, age };

const f1 = (contact) => contact;
let { email } = f1(contact);
let person2 = { email };

for (var i = 0; i < 3; i++) {
  (function (x) {
    console.log("first:" + i);
  })(i);
}

for (let i = 0; i < 3; i++) {
  (function (x) {
    console.log("second:" + i);
  })(i);
}

for (var i = 0; i < 3; i++) {
  (function (i_local) {
    return function () {
      console.log(i_local);
    };
  })(i)();
}
