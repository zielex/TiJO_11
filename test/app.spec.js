'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });

});

describe('getUpscendingNumbers', function(){
	it('should return higher number', function(){
		expect(app.getUpscendingNumbers('a', 15)).to.eql('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
	});

});
