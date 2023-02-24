const aws = require("aws-sdk");
const env = process.env.NODE_ENV || "test";

var config = require('../config/config.json')[env]

const firehose = new aws.Firehose();

const addLog = async(data) => {
    const params = {
        DeliveryStreamName: config.logStreams.appLogStream,
        Record: {
            Data: JSON.stringify(data) + '\n',
        }
    };
    try {
        const response = await firehose.putRecord(params).promise();
        return {success: 1, resp: response};
    } catch(err) {
        console.log(`error sending event to firehose: ${err.stack}`);
        return {success: 0, error: err}
    }
}

module.exports = {
    addLog: addLog
}