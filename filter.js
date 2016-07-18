function filter(array, func) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(func(array[i])) {
      newArray[newArray.length] = array[i];
    }
  }

  return newArray;
}

let array = [1, 2, 3, 4, 5, 6];

// let greaterThan4 = filter(array, item => item > 4);

// console.log(greaterThan4);

module.exports = filter;
