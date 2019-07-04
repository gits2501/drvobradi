const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/Drvobradi';   // set connection url


mongoose.connect(dbURL,{ useNewUrlParser: true })     // connect to DB

mongoose.connection.on('connected', function() {      // on connected event
  console.log(`Mongoose connected to ${dbURL}`);
}); 
mongoose.connection.on('error', function(err){        // on error 
   console.log('Mongoose connection error:', err);
})
mongoose.connection.on('disconnected', function() {   // on disconnect 
console.log('Mongoose disconnected');
});

const gracefulShutdownConnection = function(msg, callback){  // handles db connect shutdown

   mongoose.connection.close(function(){
       console.log(`Mongoose disconected: ${msg}`)
       callback();
   })
}

process.once('SIGUSR2', function() {                // When nodemon restart close mongodb conenction
   gracefulShutdownConnection('nodemon restart', function() {
       process.kill(process.pid, 'SIGUSR2');         
   });
});
process.on('SIGINT', function() {
   gracefulShutdownConnection('app termination', function() { // When node app terminates close mongodb conection
      process.exit(0);
   });
});

process.on('SIGTERM', function() {
   gracefulShutdownConnection('Heroku app shutdown', function(){ // When heroku stops
      process.exit(0);
   });
});

require('./locationsModel');  // add data model to databese
