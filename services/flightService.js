const Flight = require("../mongodbModels/Flight");
const Seat = require("../mongodbModels/Seat");

const scheduleFlight = async(req, res) => {
    try {
        let reqBody = req.body;

        const {flightId, airlines, numOfSeats} = reqBody;

        if (!(flightId && airlines && numOfSeats)) {
            return res.status(400).send(
                {
                    "success": 0,
                    "errorMessage": "All input is required"
                });
        }

        if(!Number.isInteger(flightId) || !Number.isInteger(numOfSeats))
            return res.status(400).send({ "success": 0, "errorMessage": "Wrong Input for flightId"}); 

        //create entry for a flight
        const flightCreated = await Flight.create({
            flightId: flightId,
            airlines: airlines,
            numOfSeats: numOfSeats,
            numOfBookedSeats: 0
        })

        //generate seat entries
        let seatsArr = [];

        for(let i = 1; i <= numOfSeats; i++) {
            seatsArr.push({
                seatNumber: i,
                passengerId: "",
                available: true,
                flightId: flightId
            })
        }

        const seatsCreated = await Seat.create(seatsArr);

        return res.status(200).send({
            "success": 1,
            "flight": flightCreated,
            "seats": seatsCreated
        })

    } catch (error) {
        console.log(error.stack)
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.message
        })
    }
    
}

const fetchFlightDetails = async(req, res) => {
try {
    return res.status(200).send({
        "success": 1
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
    scheduleFlight: scheduleFlight,
    fetchFlightDetails: fetchFlightDetails
}