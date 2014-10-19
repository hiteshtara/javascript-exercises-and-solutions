/**
 * Created by luciano on 18/10/14.
 */
var assert = require('assert')
var utils = require('../exercises/js/utils.js');

describe('Exercises', function(){

	describe('Utils', function(){

		it('utils.extend should return a merged object', function(){

			var objOne = {name:"moe"};
			var objTwo = {age:"50"};
			var objThree = {
				friends:[
					"Larry",
					"Curly"
				]
			};

			var returnedObj = utils.extend(objOne,objTwo,objThree);

			assert.equal(objOne.name,returnedObj.name );
			assert.equal(objTwo.age,returnedObj.age );
			assert.equal(objThree.friends,returnedObj.friends );

		});

		it('utils.lazy should avoid the previous call to the utils.lazy call', function(){



		})

	})

})



