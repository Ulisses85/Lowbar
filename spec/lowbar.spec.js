/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('_.indentity', function () {
    it('is a function', function () {
      expect(_.indentity).to.be.a('function');
    });
    it('returns the same as the arguement passed', function () {
      expect(_.indentity(10)).to.equal(10);
    });
    it('returns undefined is no arguement is passed', function () {
      expect(_.indentity()).to.equal(undefined);
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
  xdescribe('_.each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('Returns undefined if no arguments passed', function () {
      expect(_.each()).to.equal(undefined);
    });
    it('passes each element of the array as the first argument to the iteratee function', function () {
      var result = [];
      _.each([1, 2, 3], function (num) {
        result.push(num * 2);
      });
      expect(result).to.eql([2, 4, 6]);
    });
    // Could we test here for if an unexpected item is passed?
    // THIS IS WHERE WE FINISHED ON FRIDAY!!!!
  });
  describe('_.indexOf', function () {
    it('Returns the index at which value can be found', function () {
      expect(_.indexOf([10, 20, 30, 40, 50], 20)).to.equal(1);
    });
    it('Returns -1 if n is not passed', function () {
      expect(_.indexOf([1, 2, 3, 4, 5])).to.equal(-1);
    });
  });
  xdescribe('_filter', function () {
    it('Returns an array of values that pass a truth test', function () {
      var result = [];
      _.filter([1, 2, 3, 4, 5, 6], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([2, 4, 6]);
    });
    it('Returns an empty array if no array is passed', function () {
      var result = [];
      _.filter([], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([]);
    });
    it('Returns an empty array if no values pass the truth test', function () {
      var result = [];
      _.filter([1, 9, 3, 7, 5], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([]);
    });
  });
  xdescribe('_.reject', function () {
    it('Returns the values in list without the elements that pass the truth test', function () {
      var result = [];
      _.reject([1, 2, 3, 4, 5], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([1, 3, 5]);
    });
    it('Returns an empty array if no array is passed', function () {
      var result = [];
      _.reject([], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([]);
    });
    it('Returns an empty array if no values pass the truth test', function () {
      var result = [];
      _.reject([1, 9, 3, 7, 5], function (num) {
        result.push(num % 2 === 0);
      });
      expect(result).to.eql([1, 9, 3, 7, 5]);
    });
  });
  xdescribe('_.uniq', function () {
    it('Returns a duplicate free version of the array using the first entry as the value', function () {
      expect(_.uniq([1, 1, 2, 8, 3, 8, 9, 9, 10])).to.eql([1, 2, 8, 3, 9, 10]);
    });
  });
});
