const router = require('express').Router();





let homeList = function(req, res, next){

   res.render('locations-list', {
         title: 'HomeList',
         pageHeader:{
            
            title: "Drvobradi",
            strapline: "Be awere of pollution near you!"
         },
         locations: [
            {
              placeName: "Novi Karlovci",
              mapLocation:"Google Maps Location",
              polutionType: "fizicko - hemijsko",
              polutionTarget: "voda - zemlja - vazduh",
              votes: {
                 upvote: 3,
                 downvote: 0
              },
              media: {
                slike:['niz url-a slika'],
                vide: ['niz url-a videa']
              }
            }, 
            {
              placeName: "Indjija",
              mapLocation:"Google Maps Location",
              polutionType: "hemijsko",
              polutionTarget: "voda - zemlja - vazduh",
              votes: 2,
              media: {
                slike:'niz url-a slika',
                vide: 'niz url-a videa'
              }
            },
            {
              placeName: "Stara Pazova",
              mapLocation:"Google Maps Location",
              polutionType: "fizicko - hemijsko",
              polutionTarget: "voda",
              votes: 4,
              media: {
                slike:'niz url-a slika',
                vide: 'niz url-a videa'
              }
            }
        ]
   })
}

let locationInfo = function(req, res){
 // gonna take locationID from querystring and use it to search location with that ID in database
   
  res.render('location-info', {
       title: 'LocationInfo',
       location: {
           placeName: "Novi Karlovci",               // Naziv Mesta
           locationCoords:"Google Maps Location",
           polutionType: "fizicko - hemijsko",       // Tip zagadjnja
           polutionTarget: "voda - zemlja - vazduh", // Vrsta zagadjenja
           votes: {                                 // Goreglasovi/doleglasovi
              upvote: 3,
              downvote: 0
           },
           polutionName: [
               'smetliste',
               'deponija',
               'divlja deponija' 
           ],

           media: {
             slike:['Urlslika1', 'URlSlika2'],
             video: ['urlVidfeo1', 'urlVideo2'],
             doc: ['urlDoc2']
           },

           temporalData:{                             // Vremenske karakteristike
              estimatedPolutionTime: 'od | do'        // Trajanje zagadjenja
              
              
           },
           polutionState: [                           // stanje zagadjenje povrsine
             'akutno',
             'hronicno'
           ],
           degradability: [
             'biodegradable',
             'degradable',
             'hardly degradable'
           ],
           polutants: [                                // Naziv zagadjivaca | spoji sa Tipom Zagadjenja
              'gradjevinski otpad',                    // polutants
              'zivotinjski otpad',
              'biljni otpad',
              'kanalizacione-otpadne vode',
              'hemikalije u poljoprivredi',
              'hemijska industrija'
           ]
       }
  })
}

let addReview = function(req, res ){
   res.render('location-addcomment-form', {    // name of template should map to name of the page
      title: 'Add review'
   })
} 

module.exports.homelist = homeList;
module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;
