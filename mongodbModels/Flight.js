const mongoose = require('mongoose')
const { Schema } = mongoose

const flightSchema = new Schema({
    flightId: { 
        type: Number,
        required: true,
        unique: true
    },
    numOfSeats: { 
        type: Number, 
        required: true 
    },
    numOfBookedSeats: { 
        type: Number, 
        required: true,
        default: 0
    },
    airlines: { 
        type: String, 
        required: true,
        default: "SukasaAir"
    }
}, {timestamps: true})

module.exports = mongoose.model('Flight', flightSchema)