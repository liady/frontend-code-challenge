const { randomCombinations } = require('../../exercise/logic');

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(randomCombinations()),
    };
};
