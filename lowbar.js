var _ = {};

_.indentity = function(a) {
  return a;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
