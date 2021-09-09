const http = require('http');
const locations = require('./locations.json');
const insights = require('./insights.json');
const { randomCombinations } = require('./logic');

const api = http.createServer(function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Content-Type': 'application/json',
        /** add other headers as per requirement */
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (req.url === '/locations') {
        res.writeHead(200, headers);
        res.write(JSON.stringify(locations));
        res.end();
        return;
    }

    if (req.url === '/insights') {
        res.writeHead(200, headers);
        res.write(JSON.stringify(insights));
        res.end();
        return;
    }

    if (req.url === '/events') {
        res.writeHead(200, headers);
        res.write(JSON.stringify(randomCombinations()));
        res.end();
        return;
    }

    res.writeHead(500, headers);
    res.end(JSON.stringify({ error: 'Invalid Request!' }));
});

api.listen(5000);
