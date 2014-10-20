// Dummy HTTP Mocks
var q = require('../bower_components/q/q');
var getProgramsMock = function() {
  setTimeout(function() {
    return ['Program 1', 'Program 2', 'Program 3'];
  }, 1000);
};

var scheduleProgramMock = function(callback) {
  setTimeout(function() {
    callback(true);
  }, 1000);
};

// TODO convert callback API from async-callback to a promise API implementation
var Programs = {

	get: q.fcall(getProgramsMock)

};


// Client code
Programs.get().then(function(programs) {
    console.log('Received', programs);
  });

//Programs.schedule('someProgramId').then(function(scheduled) {
//    console.log('Schedule result', scheduled);
//  });

