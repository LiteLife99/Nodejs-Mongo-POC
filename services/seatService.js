const reserveSeat = async (req, res) => {
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