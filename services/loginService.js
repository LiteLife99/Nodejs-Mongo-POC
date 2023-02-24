const login = async (req, res) => {
    try {
        return res.status(200).send({
            "success": 1,
            "authToken": "abcd"
        })
    } catch (error) {
        return res.status(500).send({
            "success": 0,
            "errorMessage": error.errorMessage
        })
    }
}

module.exports = {
    login: login
}