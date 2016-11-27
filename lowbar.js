var _ = {};

_.identity = function (input) {
  return input;
};

_.first = function (array, item) {
  item = item || 1;
  if (item === 1) {
    return array[0];
  }
  return array.slice(0, item);
};

_.last = function (array, item) {
  // TODO: Refactor to do the same as _.first
  if (!item) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - item);
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

_.indexOf = function (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
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
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (_.indexOf(newArray, array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
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

_.reduce = function (collection, iterator, accumulator) {
  if (arguments.length < 3) {
    accumulator = collection[0];
  }
  _.each(collection, function (value) {
    accumulator = iterator(accumulator, value);
  });
  return accumulator;
};

_.each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};
_.contains = function (collection, target) {
  return _.reduce(collection, function (match, item) {
    if (match) {
      return true;
    } else {
      return item === target;
    }
  }, false);
};
_.every = function (collection, iterator) {
  if (iterator === undefined) {
    var trueStatements1 = [];
    for (var j = 0; j < collection.length; j++) {
      if (collection[j]) {
        trueStatements1.push(collection[j]);
      }
    }
    return trueStatements1.length === collection.length;
  } else {
    var trueStatements = [];
    for (var i = 0; i < collection.length; i++) {
      if (iterator(collection[i])) {
        trueStatements.push(iterator(collection[i]));
      }
    }
    return trueStatements.length === collection.length;
  }
};
_.some = function (collection, iterator) {
  if (iterator === undefined) {
    return (_.indexOf(collection,true) > -1) ? true : false;
  } else {
    var all = _.every(collection, iterator);
    if (all) {
      return true;
    } else {
      return _.every(collection, function (x) {
        if (!iterator(x)) {
          return true;
        } else {
          return false;
        }
      }) ? false:true;
    }
  }
};
_.extends = function (obj) {
  _.each(arguments, function (argObject) {
    _.each(argObject, function (value, key) {
      obj[key] = value;
    });
  });
  return obj;
};
_.defaults = function (obj) {
  if (Object.keys(obj).length === 0) {
    var t = arguments;
    for (var f = (arguments.length - 1); f >= 0; f--) {
      for (var r in t[f]) {
        obj[r] = t[f][r];
      }
    }
    return obj;
  } else {
    var x = Object.keys(arguments[0]);
    for (var k = 0; k < x.length; k++) {
      for (var z = 1; z < arguments.length; z++) {
        for (var j in arguments[z]) {
          if (x[k] === j) {
            delete arguments[z][j];
          }
        }
      }
    }
    var t = arguments;
    for (var i = 1; i < arguments.length; i++) {
      for (var r in t[i]) {
        obj[r] = t[i][r];
      }
    }
    return obj;
  }
};
_.once = function (func) {
  var callFunc = false;
  var result;
  return function () {
    if (!callFunc) {
      result = func.apply(this, arguments);
      callFunc = true;
    }
    return result;
  };
};
_.memoize = function () {};
_.delay = function () {};
_.shuffle = function (list) {
  var shuffled = [];
  var listCopy = Array.prototype.slice.call(list);
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var random = Math.floor(Math.random() * listCopy.length);
    result.push(listCopy[random]);
    listCopy.splice(random, 1);
  }
  return result;
};
_.invoke = function () {};
_.sortBy = function () {};
_.zip = function () {};
_.flatten = function () {};
_.intersection = function () {};
_.difference = function () {};
_.throttle = function () {};

if (typeof module !== 'undefined') {
  module.exports = _;
}
