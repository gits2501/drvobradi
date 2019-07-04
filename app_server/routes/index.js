const express = require('express');

const ctrlLocations = require('../controllers/Locations')
const ctrlOthers = require('../controllers/Others')

const router = express.Router();

/* GET home page. */

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about)
module.exports = router;
