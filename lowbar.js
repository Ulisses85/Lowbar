var _ = {};

_.indentity = function(a) {
  return a;
};
_.first = function(array, n) {
  if (!n) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
};
_.last = function(array, n) {
if (!n){
  return array[array.length-1];
}else{
  return array.slice(array.length - n);
}
};
_.each = function() {

};

if (typeof module !== 'undefined') {
  module.exports = _;
}
