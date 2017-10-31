const sum = (a, b) => a + b;

console.time('1er appel de sum');
sum(1, 2);
console.timeEnd('1er appel de sum');

console.time('2e appel de sum');
sum(1, 2);
console.timeEnd('2e appel de sum');

console.time('3e appel de sum');
sum(1, 2);
console.timeEnd('3e appel de sum');

console.time('4e appel de sum');
sum(1, 2);
console.timeEnd('4e appel de sum');

console.time('5e appel de sum');
sum(1, 2);
console.timeEnd('5e appel de sum');