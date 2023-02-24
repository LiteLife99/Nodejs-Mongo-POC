const express = require("express");
const seatService = require("../services/seatService");

const router = express.Router();

//Seat Booking CRUD APIs
router.post('/reserve', seatService.reserveSeat);

router.post('/reset', seatService.resetSeat);

module.exports = router;