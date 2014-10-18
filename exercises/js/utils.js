// TODO implement utils module
var utils = {};

var globals = {
	"timeOut":null
}

utils.bind = function(func, obj, greetings){

	function NewFunc(func, obj, greetings) {
		this.func = func;
		this.name = obj.name;
		this.greetings = greetings;
	}

	var newFunc = new NewFunc(func,obj,greetings);

	return newFunc;

};

utils.extend = function(){

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

utils.memorize = function(){};

utils.lazy = function(func, time){

	clearTimeout(globals.timeOut);
	globals.timeOut = setTimeout(func,time);

};
