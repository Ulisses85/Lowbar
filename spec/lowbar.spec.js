/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));
var sinon = require('sinon');

var numsArray = [2, 3, 4, 5];

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('_.identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('returns the same as the arguement passed', function () {
      expect(_.identity(10)).to.equal(10);
    });
    it('returns undefined is no arguement is passed', function () {
      expect(_.identity()).to.equal(undefined);
    });
  });
  describe('_.first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('Returns the first element in the array', function () {
      expect(_.first([1, 2, 3, 4, 5])).to.equal(1);
    });
    it('Returns the first n elements of the array', function () {
      expect(_.first([1, 2, 3, 4, 5], 3)).to.eql([1, 2, 3]);
    });
  });
  describe('_.last', function () {
    it('is a function', function () {
      expect(_.last).to.be.a('function');
    });
    it('Returns last element of the array', function () {
      expect(_.last([1, 2, 3, 4, 80])).to.equal(80);
    });
    it('Returns the last n elements of the array', function () {
      expect(_.last([1, 2, 3, 80, 7], 2)).to.eql([80, 7]);
    });
  });
  describe('_.each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('does not call the iteratee function if it gets an empty list', function () {
      var spy = sinon.spy();
      _.each({}, spy);
      expect(spy.callCount).to.equal(0);
    });
    it('calls the iteratee function as many times as elements in the array', function () {
      var spy = sinon.spy();
      _.each([1, 2, 3], spy);
      expect(spy.callCount).to.equal(3);
    });
    it('the iteratee gets called with the element as the first arg, the index as the second and the list as the third', function () {
      var spy = sinon.spy();
      _.each([1, 2, 3], spy);
      expect(spy.firstCall.calledWithExactly(1, 0, [1, 2, 3])).to.be.true;
      expect(spy.secondCall.calledWithExactly(2, 1, [1, 2, 3])).to.be.true;
      expect(spy.thirdCall.calledWithExactly(3, 2, [1, 2, 3])).to.be.true;
    });
    it('passes each element of the list as the first argument to the iteratee function', function () {
      var result = [];
      _.each([1, 2, 3], function (num) {
        result.push(num * 2);
      });
      expect(result).to.eql([2, 4, 6]);
    });
  });
  describe('_.indexOf', function () {
    it('Returns the index at which value can be found', function () {
      expect(_.indexOf([10, 20, 30, 40, 50], 20)).to.equal(1);
    });
    it('Returns -1 if n is not passed', function () {
      expect(_.indexOf([1, 2, 3, 4, 5])).to.equal(-1);
    });
    it('Returns -1 if n is not present in the array', function () {
      expect(_.indexOf([1, 2, 3, 4, 5]), 'string').to.equal(-1);
    });
    it('Returns -1 if the falsey value', function () {
      expect(_.indexOf([1, 2, 3, 4, 5]), '5').to.equal(-1);
    });
  });
  describe('_filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });
    it('Returns an array of values that pass a truth test', function () {
      var result = _.filter([1, 2, 3, 4, 5], function (num) {
        return num % 2 === 0;
      });
      expect(result).to.eql([2, 4]);
    });
    it('Return an empty array if no array is passed', function () {
      var result = _.filter([], function (num) {
        return num % 2 === 0;
      });
      expect(result).to.eql([]);
    });
  });
  describe('_.reject', function () {
    it('Returns the values in list without the elements that pass the truth test', function () {
      var result = _.reject([1, 2, 3, 4, 5], function (num) {
        return num % 2 === 0;
      });
      expect(result).to.eql([1, 3, 5]);
    });
    it('Returns an empty array if no array is passed', function () {
      var result = _.reject([], function (num) {
        return num % 2 === 0;
      });
      expect(result).to.eql([]);
    });
    it('Returns an empty array if no values pass the truth test', function () {
      var result = _.reject([1, 9, 3, 7, 5], function (num) {
        return num % 2 === 0;
      });
      expect(result).to.eql([1, 9, 3, 7, 5]);
    });
  });
  describe('_.uniq', function () {
    it('Is a function', function () {
      expect(_.uniq).to.be.a('function');
    });
    it('Returns a duplicate free version of the array using the first entry as the value', function () {
      expect(_.uniq([1, 1, 2, 8, 3, 8, 9, 9, 10])).to.eql([1, 2, 8, 3, 9, 10]);
      expect(_.uniq([1, 1, 1, 22, 22, 33])).to.eql([1, 22, 33]);
    });
  });
  describe('_.map', function () {
    it('Should be a function', function () {
      expect(_.map).to.be.a('function');
    });
    it('should take two arguements', function () {
      expect(_.map.length).to.equal(2);
    });
    it('should always return an array', function () {
      expect(_.map()).to.be.an('array');
    });
    it('should return augmented values', function () {
      expect(_.map(numsArray, function (num) {
        return num * 2;
      })).to.eql([4, 6, 8, 10]);
    });
    it('returned array should be the same length as the input', function () {
      expect(_.map(numsArray).length).to.equal(numsArray.length);
    });
  });
  describe('_.pluck', function () {
    it('is a function which takes two arguements', function () {
      expect(_.pluck.length).to.equal(2);
    });
    it('returns an array of values', function () {
      var people = [{name: 'Tom', age: 29}, {name: 'Ben', age: 26}];
      expect(_.pluck(people, 'name')).to.eql(['Tom', 'Ben']);
    });
    it('should return an array', function () {
      var people = [{name: 'Tom', age: 29}, {name: 'Ben', age: 26}];
      expect(_.pluck(people, 'name')).to.be.an('array');
    });
  });
  describe('_.reduce', function () {
    it('is a function', function () {
      expect(_.reduce).to.be.a('function');
    });
    it('returns a single value', function () {
    });
    it('should invoke the iterator on the first element when given an accumulator', function () {
      var sum = function (acc, num) { return acc + num * num; };
      var result = _.reduce([2, 3], sum, 0);
      expect(result).to.equal(13);
    });
    it('should take first elem as an accumulator when none is specified', function () {
      var sum = function (acc, num) { return acc + num; };
      var result = _.reduce([1, 2, 3], sum);
      expect(result).to.equal(7);
    });
  });
  describe('_.contains', function () {
    it('is a function', function () {
      expect(_.contains).to.be.a('function');
    });
    it('should return true for [1,2,3]', function () {
      expect(_.contains([1, 2, 3], 3)).to.equal(true);
    });
    it('should return false for ([1, 2, 3], 4) ', function () {
      expect(_.contains([1, 2, 3], 4)).to.equal(false);
    });
  });
  describe('_.shuffle', function () {
    it('original object should not be modified', function () {
      var list = [11, 20, 33, 40];
      var shuffled = _.shuffle(list).sort();
      expect(shuffled).to.not.equal(list);
      expect(list).to.eql([11, 20, 33, 40]);
    });
    it('should have the same elements as the original object', function () {
      var list = [11, 20, 33, 40];
      var shuffled = _.shuffle(list).sort();
      expect(shuffled).to.eql([11, 20, 33, 40]);
    });
    it('should have a random order not equal original object', function () {
      var list = [11, 20, 33, 40];
      var shuffled = _.shuffle(list);
      expect(shuffled).to.not.eql([11, 20, 33, 40]);
    });
  });
  describe('every', function () {
    var isEven = function (num) {
      return num % 2 === 0;
    };
    it('returns true for an empty list', function () {
      expect(_.every([], _.identity)).to.be.true;
    });
    it('returns true for  all-truthy data types', function () {
      expect(_.every([1, {}, true], _.identity)).to.be.true;
    });
    it('returns false for falsy data types', function () {
      expect(_.every([null, 0, undefined], _.identity)).to.be.false;
    });
    it('returns false for falsy and truety values in one list', function () {
      expect(_.every([true, false, 1], _.identity)).to.be.false;
      expect(_.every([1, undefined, true], _.identity)).to.be.false;
    });
    it('works with undefined value list', function () {
      expect(_.every([undefined, undefined, undefined], _.identity)).to.be.false;
    });
    it('should cast the result to a boolean', function () {
      expect(_.every([1], _.identity)).to.be.true;
      expect(_.every([0], _.identity)).to.be.false;
    });
  });
});
