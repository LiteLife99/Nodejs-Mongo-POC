const mongoose = require("mongoose")
const Seat = require("../mongodbModels/Seat");

const reserveSeat = async (req, res) => {
    try {
        let reqBody = req.body;
        const {flightId, seatNumber} = reqBody;
        const passengerId =  req.user.user_id;

        const session = await mongoose.startSession()
        session.startTransaction()

        try {
            const query = {
                flightId: flightId,
                seatNumber: seatNumber,
                available: true
            }
            const slot = await Seat.findOneAndUpdate(query, {
                $set: {
                    passengerId: passengerId,
                    available: false
                }
            }, { useFindAndModify: false, new: true })

            if (!slot) {
                await session.abortTransaction()
                session.endSession()
                return res.status(500).send({
                    "success": 0,
                    "errorMessage": "Seat taken already"
                })
            }

            await session.commitTransaction()
            
            return res.status(200).send({ 
                "success": 1,
                "message": 'Seat is successfully booked',
                "seat": slot
            })
        } catch (error) {
          await session.abortTransaction()
          console.log(error.stack)
            return res.status(500).send({
                "success": 0,
                "errorMessage": error.message
            })
        } finally {
          session.endSession()
        }

    } catch (error) {
        console.log(error.stack)
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.message
        })
    }
}

const resetSeat = async (req, res) => {
    try {
        return res.status(200).send({
            "success": 1,
        })
    } catch (error) {
        console.log(error.stack)
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.message
        })
    }
}

module.exports = {
    reserveSeat: reserveSeat,
    resetSeat: resetSeat
}