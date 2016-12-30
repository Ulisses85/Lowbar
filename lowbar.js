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
      }) ? false : true;
    }
  }
};

_.extend = function (obj) {
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

_.memoize = function (func) {
  var cache = {},
    result;
  var args = Array.prototype.slice.call(arguments);
  return function () {
    if (args in cache) {
      return cache[args];
    } else {
      return cache[args] = func.apply(this, arguments);
    }
  };
};

_.delay = function (func, wait) {
  var args = Array.prototype.slice.call(arguments, 2);
  setTimeout(function () {
    func.apply(this, args);
  }, wait);
};

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

_.invoke = function (collection, method, argument) {
  if (typeof method === 'string') {
    return _.map(collection, function (val, key) {
      return val[method](argument);
    });
  } else if (typeof method === 'function') {
    return _.map(collection, function (val, key) {
      return method.apply(val, argument);
    });
  }
};

_.sortBy = function (collection, iterator) {
  if (typeof iterator === 'string') {
    return collection.sort(function (a, b) {
      if (a[iterator] > b[iterator]) {
        return 1;
      } else if (a[iterator] < b[iterator]) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (typeof iterator === 'function') {
    return collection.sort(function (a, b) {
      if (iterator(a) > iterator(b)) {
        return 1;
      } else if (iterator(a) < iterator(b)) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return collection;
  }
};

_.zip = function (arrays) {
  var list = [].slice.call(arguments);
  var longestArr = list.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }, []);
  return longestArr.map(function (_, i) {
    return list.map(function (array) {
      return array[i];
    });
  });
};

_.flatten = function flatten (list, result) {
  result = [];
  for (var i = 0; i < list.length; i++) {
    var current = list[i];
    if (Array.isArray(current)) {
      result.push.apply(list, flatten(current));
    } else {
      result.push(current);
    }
  }
  return result;
};

_.intersection = function (list) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = list.length; i < length; i++) {
    var item = list[i];
    if (_.contains(result, item)) continue;
    for (var j = 1; j < argsLength; j++) {
      if (!_.contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
};

_.difference = function (array1, array2) {
  var result = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      result.push(array1[i]);
    }
  }
  for (i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) === -1) {
      result.push(array2[i]);
    }
  }
  return result;
};

_.throttle = function () {};

if (typeof module !== 'undefined') {
  module.exports = _;
}
