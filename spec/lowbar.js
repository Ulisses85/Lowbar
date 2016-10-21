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
    })
  });
  describe('#each', function () {
    it('is a function', function() {
      expect(_.each).to.be.a('function');
    });
  });
});
