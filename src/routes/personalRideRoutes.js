const express = require('express');
const router = express.Router();
const personalRideController = require('../controllers/personalRideController');
const { authenticate, optionalAuthenticate, asyncHandler, validateRideId } = require('../middleware');

// Get all personal rides
router.get('/', asyncHandler(personalRideController.getAllPersonalRides));

// Get a specific personal ride
router.get('/:rideId', asyncHandler(personalRideController.getPersonalRideById));

// Create a new personal ride
router.post('/', optionalAuthenticate, asyncHandler(personalRideController.createPersonalRide));

// Update a personal ride
router.put('/:rideId', validateRideId, asyncHandler(personalRideController.updatePersonalRide));

// Delete a personal ride
router.delete('/:rideId', validateRideId, asyncHandler(personalRideController.deletePersonalRide));

module.exports = router;
