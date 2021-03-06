"use strict";

var oriGen = require("./../src/js/ori-gen.js");

describe('ori-gen', function() {
	it('works', function() {
		expect(oriGen._doPiece([
			"....",
			"..##",
			".##.",
			"...."
		])).toEqual([
			{xMin: 1, yMin: 1, xDim: 3, yDim: 2, rows: [6, 3]},
			{xMin: 1, yMin: 1, xDim: 2, yDim: 3, rows: [1, 3, 2]},
			{xMin: 0, yMin: 1, xDim: 3, yDim: 2, rows: [6, 3]},
			{xMin: 1, yMin: 0, xDim: 2, yDim: 3, rows: [1, 3, 2]}
		]);
	});
});
