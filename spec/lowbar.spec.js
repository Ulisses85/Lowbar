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
    it('returns the same as the arguement passed',function () {
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
      expect(_.first([1,2,3,4,5])).to.equal(1);
    });
  });
  describe('_.last', function(){
    it('is a function', function (){
      expect(_.last).to.be.a('function');
    });
    it('Returns last element of the array', function(){
      expect(_.last([1,2,3,4,80])).to.equal(80);
    });
    it('Returns the last n elements of the array', function(){
      expect(_.last([1,2,3,80,7],2)).to.eql([80,7]);
    });
  });
  describe('_.each', function () {
    it('is a function' , function(){
      expect(_.each).to.be.a('function');
    });
    it('Returns undefined if no arguments passed', function(){
      expect (_.each()).to.equal(undefined);
    });
    it('passes each element of the array as the first argument to the iteratee function', function () {
      var result = [];
      _.each([1,2,3], function (num) {
        result.push(num * 2);
      });
      expect(result).to.eql([2, 4, 6]);
    });
  });
});
