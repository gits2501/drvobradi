const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({  // schema for one location on home page (no details)

    
     locationCoords: { 
         type: {
            type: String
         },
         coordinates: {
           type: [Number]
 
         }
     },


     placeName : { 
         type: String,
         required: true
     },
        polutionType: { 
         type: [String],

         required: true
     },

     polutionTarget: { 
         type: [String],
         required: true
     },


     votes:{
 
        upvote: Number,
        downvote: Number
     },
     media: {

       pics: [String],
       video: [String],
       doc: [String],       
     },

     creationDate: { 
         type: Date,
         required: true
     }

})
locationSchema.index({locationCoords:'2dsphere'})

//mongoose.model('Location', locationSchema)  // 'compile te schema to model (app uses model to interact with db)'
 

  // add locationInfo schema (all details)
