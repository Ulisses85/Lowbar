/* global describe, it */
var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));
var sinon = require('sinon');

////Inputs/////
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
  describe('#reduce', function () {
    it('is a function', function () {
      expect(_.reduce).to.be.a('function');
    });
    it('Correctly adds all the numbers in the array', function () {
      var total = _.reduce([1, 2, 3], function (acc, num) {
        return acc + num;
      });
      total.should.equal(6);
    });
    it('Correctly maps an array', function () {
      var doubles = _.reduce([1, 2, 3], function (acc, num) {
        acc.push(num * 2);
        return acc;
      }, []);
      doubles.should.eql([2, 4, 6]);
    });
  });
});
