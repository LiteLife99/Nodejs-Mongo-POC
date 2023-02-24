const reserveSeat = async (req, res) => {
    try {
        return res.status(200).send({
            "success": 1,
        })
    } catch (error) {
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.errorMessage
        })
    }
}

const resetSeat = async (req, res) => {
    try {
        return res.status(200).send({
            "success": 1,
        })
    } catch (error) {
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.errorMessage
        })
    }
}

module.exports = {
    reserveSeat: reserveSeat,
    resetSeat: resetSeat
}