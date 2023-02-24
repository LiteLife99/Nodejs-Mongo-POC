const mongoose = require('mongoose')
const { Schema } = mongoose

const seatSchema = new Schema({
    seatNumber: { 
        type: Number, 
        required: true 
    },
    passengerId: { 
        type: mongoose.ObjectId, 
        required: true 
    },
    available: { 
        type: Boolean, 
        required: true,
        default: false
    },
    flightId: { 
        type: Number,
        required: true 
    }
}, {timestamps: true})

module.exports = mongoose.model('Seat', seatSchema)