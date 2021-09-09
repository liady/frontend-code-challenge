const locations = require('./locations.json');
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ data: locations }),
    };
};
