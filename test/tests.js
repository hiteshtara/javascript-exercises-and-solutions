/**
 * Created by luciano on 18/10/14.
 */

/**
 *
 * To run the tests : having node installed, and from the root folder do "npm install"
 * that command should create a "node_modules" folder, and that's where mocha module
 * is goind to get installed, it is also needed to install mocha globaly by doing
 * (from anywhere): sudo npm install -g mocha  or in windows npm install -g mocha
 * having those things done you can run the tests doing : $mocha 'path/to/test.js
 * or in a more simple way : cd 'path/to/testFolder' && mocha *.js
 *
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

		it('utils.lazy should avoid the previous call to the utils.lazy call', function(done){

			;

			utils.lazy(function () {

				val = false;

				utils.lazy(function () {

					val = true;
					assert.equal(true,val)

					done()

				},500);


			},1000);


		});

		it('utils.bind should return the pased name', function(){

			var func = function(greeting){
				return (greeting + ': ' + this.name);
			};

			var strOne = 'Hi';
			var objOne = {name:'Ann'}

			var fn = utils.bind(func, {name : 'Matias'});
			var fnOne = utils.bind(func, objOne);

			assert.equal('hi: Matias',fn('hi'))

			assert.equal(strOne + ': ' + objOne.name,fnOne(strOne))

		});

		it('utils.memorize should only execute once when the args are in cache', function(){

			var fibonacci = function(n) {
				//avoid the console log to keep the console clean
				return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
			}

			var memoizedFibonacci = utils.memorize(fibonacci);

			assert.notEqual(undefined,memoizedFibonacci(7));
			assert.equal(undefined,memoizedFibonacci(7));

		});

	})

})



