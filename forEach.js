function forEach(array, func) {
  for(let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

let array = [1,2,3,4];

// forEach(array, item => console.log(item));

module.exports = forEach;
