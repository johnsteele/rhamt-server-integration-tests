'use strict';

let chai = require('chai');
 
import * as config from 'config';

describe('Test Configuration REST Api', function () {

	var server = config.SERVER_HOST;
	var expect = chai.expect;
	var assert = chai.assert;

	function testAsync(done, fn) {
		try {
			fn();
			done();
		} catch (err) {
			done(err);
		}
	}

	before(() => {
	})

	it('should return configuration', (done) => {
		
	});
});