function map(array, func) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    newArray[i] = func(array[i]);
  }

  return newArray;
}

let array = [1, 2, 3, 4, 5, 6];

// let sqare = map(array, item => item * item);

// console.log(sqare);

module.exports = map;
