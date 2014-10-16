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

// API Implementation
var Programs = {
  get: function(callback) {
    getProgramsMock(callback);
  },
  schedule: function(programId, callback) {
    scheduleProgramMock(callback);
  }
};


// Client code
Programs.get(function(programs) {
  console.log('Received', programs);
});

Programs.schedule('someProgramId', function(scheduled) {
  console.log('Schedule result', scheduled);
});