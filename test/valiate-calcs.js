/**
 * Test - Validate calculations
 * 
 * This example test should validate calculations against NORAD TLE data.
 * You can break these tests down to the unit level to be super-thorough, or 
 * just stick to a black-box style test, where you expect the higher-order 
 * functions to return an expected result.
 */

const mocha = require('mocha');
const assert = require('assert');

const mockData = require('./data/tle.mock');


describe('TLE Transform', function() {
    // First validate the data (example only)
    mockData.forEach((d) => {
        describe('# of line 1 components', function() {
            it('Should have N components', function() {
                let N = 10;
                assert.equal(d.tle[0].split(' ').length, N);
            });
        });
    });

    // Then test the calc functions
    // describe(...)
  });