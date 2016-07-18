function slice(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(arguments[1] != undefined || arguments[1] == 0) {

      if(arguments[2] != undefined && arguments[2] < array.length) {

        if(arguments[1] <= i && arguments[2] > i ) {
          newArray[newArray.length] = array[i];
        }

      } else {

        if(arguments[1] <= i) {
          newArray[newArray.length] = array[i];
        }
      }

    }
  }

  return newArray;
}

let array = [1, 2, 3, 4, 5, 6];

console.log(slice(array, 2, 1));

module.exports = slice;
