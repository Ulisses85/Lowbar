var _ = {};

_.identity = function (a) {
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

_.each = function (list, iteratee) {
  iteratee = iteratee || this.identity;
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  } else {
    for (var key in list) {
      iteratee(list[key], key, list);
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

_.map = function (list, iteratee) {
  var newArray = [];
  iteratee = iteratee || _.identity;
  _.each(list, function (element, i, listA) {
    newArray.push(iteratee(element, i, listA));
  });
  return newArray;
};

_.pluck = function (list, propertyName) {
  return _.map(list, function (object) {
    return object[propertyName];
  });
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
