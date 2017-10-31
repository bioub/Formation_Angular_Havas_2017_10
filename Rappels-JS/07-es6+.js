// Fonction fléchées : =>
// Template string : `Hello ${name}`
// let et const plutot que var
// method property {method() {}}
// Promise
// class

// REST Params
const sum = (...nbs) => nbs.reduce((a, n) => a + n, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// reduce() ES5
// acc: 0, nb: 1 => 1
// acc: 1, nb: 2 => 3
// acc: 3 ...

// SPREAD operator
const nbs = [2, 3, 4];
console.log(sum(nbs[0], nbs[1], nbs[2]));
console.log(sum(...nbs)); // ES6

const autres = [1, ...nbs, 5]; // 1, 2, 3, 4, 5
const clone = [...nbs];

// REST/SPREAD Object (ESNext)
const coords2d = {
  x: 10,
  y: 20,
};
const coords3d = {
  ...coords2d,
  z: 30,
};
const cloneObj = {...coords3d}; // SPREAD
const {...cloneObj2} = coords2d; // REST + Destruct

// Destructurer
/*
const trois = nbs[1];
const quatre = nbs[2];
*/
const [, trois, quatre, cinq = 5] = nbs;
const {x: maVariableX, y: y = 10, z = 30} = coords2d;

function ajax(settings = {}) {
  const {method='GET', data = {}} = settings;

  // method === 'GET'
}