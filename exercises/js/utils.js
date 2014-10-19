// TODO implement utils module

var globals = {
	timeOut:null
}

function Utils(){ return this; };

Utils.prototype.extend = function () {

	var obj = {};

	for(var i = 0; i < arguments.length; i++){

		for(var key in arguments[i]){

			if(typeof arguments[i] === "object" && !obj.hasOwnProperty(key)){

				obj[key] = arguments[i][key];

			}

		}

	}

	return obj;

};

Utils.prototype.bind = function(func, obj){

	return function(){
		return func.apply(obj, arguments);
	};

};

Utils.prototype.lazy = function(func, time){

	clearTimeout(globals.timeOut);
	globals.timeOut = setTimeout(func,time);

};

Utils.prototype.memorize = function (fn) {

	var memo = {}

	return function(){

		var n = arguments[0];

		if(n !== 0 && n !== 1){

			if(n in memo){

				return function(){
					console.log('987');
				}

			}else{

				memo[n] = n;
				return fn.apply(fn, arguments);

			}


		}

	};


}

var utils = new Utils();


////module.exports = utils;