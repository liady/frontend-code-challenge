const insights = require('../../exercise/insights.json');
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(insights),
    };
};
