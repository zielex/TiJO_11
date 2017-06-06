'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
  it('should return false with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(1, 5)).to.eql(false);
  });
});

describe('uselessFunction', function (){
  it('should return everything what you argument', function ()    {
      expect(app.uselessFunction(123)).to.eql(123);
      expect(app.uselessFunction(true)).to.eql(true);
  });
});
