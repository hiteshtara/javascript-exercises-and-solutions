// Dummy HTTP Mocks
var getProgramsMock = function(callback) {
  setTimeout(function() {
    callback(['Program 1', 'Program 2', 'Program 3']);
  }, 1000);
};

var scheduleProgramMock = function(callback) {
  setTimeout(function() {
    callback(true);
  }, 1000);
};

// TODO convert callback API from async-callback to a promise API implementation
var Programs = {

};


// Client code
Programs.get()
  .then(function(programs) {
    console.log('Received', programs);
  });

Programs.schedule('someProgramId')
  .then(function(scheduled) {
    console.log('Schedule result', scheduled);
  });