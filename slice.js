function slice(array) {
  let newArray = [];

  if(arguments[1] != undefined) {

    if(arguments[1] < 0) {
      for(let i = array.length + arguments[1]; i < array.length; i++) {
        newArray[newArray.length] = array[i];
      }
    } else if(arguments[1] >= 0 && arguments[2] > 0) {
        for(let i = arguments[1]; i < arguments[2]; i++) {
          newArray[newArray.length] = array[i];
        }
    } else if(arguments[1] >= 0 && arguments[2] < 0) {
      // не знаю, как работает отрицательный arguments[2]
    } else if(arguments[1] >= 0) {
      for(let i = arguments[1]; i < array.length; i++) {
        newArray[newArray.length] = array[i];
      }
    }

  } else {
    for(let i = 0; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  }

  return newArray;
}

let array = [1, 2, 3, 4, 5, 6];

console.log(slice(array, 2, 1));

module.exports = slice;
