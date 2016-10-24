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

_.filter = function (list, predicate) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
};

_.reject = function (list, predicate) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (!predicate(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
};

_.uniq = function (array) {
  return array.filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  });
};
_.each = function() {

};

if (typeof module !== 'undefined') {
  module.exports = _;
}
