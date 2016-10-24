var _ = {};

_.indentity = function (a) {
  return a;
};
_.first = function (array, n) {
  if (!n) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
};
_.last = function (array, n) {
  if (!n) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n);
  }
};
_.each = function (array, iteree) {
  for (var i = 0; i < array.length; i++) {
    if (!array) {
      return null;
    } else {
      iteree(array[i], i);
    }
  }
};
_.indexOf = function (array, n) {
  if (!n) {
    return -1;
  } else {
    return array.indexOf(n);
  }
};

_.filter = function (array, predicate) {
  //create a new array
    //Look at each item in the array
      // if it passes a the predicate
        //put it into a new array
    //return the new array of filtered values.

  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

_.reject = function () {

};
_.uniq = function () {

};

if (typeof module !== 'undefined') {
  module.exports = _;
}
