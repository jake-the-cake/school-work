let A = [1, 2, 3];
let B = A.unshift(3);
// using Spread opererator
B = [0, ...A, 4];
const f1 = () => 1;
const f2 = () => 2;
const f3 = () => 3;
console.log(a() + 1 === b());
//Destructuring Object
let color = "red";
let width = 200;
let height = 300;
// or  onClick = width =>console.log(width);
let props = { color, width, height };
// shorthand for props = {color:color, widht: width, height:height}
const onClick = ({ width }) => {
  console.log(width);
};
onClick(props);
