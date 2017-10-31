
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('both params have to be numbers');
  }

  return a + b;
};

try {
  sum();
}
catch (err) {
  console.log(`Error occured : ${err.message}`)
}

try {
  setTimeout(() => {
    sum();
  }, 1000);
}
catch (err) {
  console.log(`Error occured : ${err.message}`)
}