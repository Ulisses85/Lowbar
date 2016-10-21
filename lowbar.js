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

if (typeof module !== 'undefined') {
  module.exports = _;
}
