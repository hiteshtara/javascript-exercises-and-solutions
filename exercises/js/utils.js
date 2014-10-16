// TODO implement utils module
var utils = {};

utils.bind = function(){};

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

utils.lazy = function(){};
