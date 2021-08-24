const http = require('http');
const { DateTime } = require('luxon');
const locations = require('./locations.json');
const insights = require('./insights.json');

const api = http.createServer(function (req, res) {
    if (req.url === '/locations') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(locations));
        res.end();
        return;
    }

    if (req.url === "/insights") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(insights));
        res.end();
        return;
    }

    if (req.url === "/events") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(randomCombinations()));
        res.end();
        return;
    }

    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid Request!' }));
});

function randomCombinations() {
    const now = DateTime.local().startOf('minute');

    return locations.flatMap(location => insights.map(insight => ({
        location: location.id,
        insight: insight.id,
        events: randomEvents(now),
    })));
}

function randomEvents(now) {
    const numberOfEvents = randomInt(0, 6);
    let end = now;

    return Array.from({ length: numberOfEvents }, () => {
        const randomDelayFromEnd = randomInt(0, 20) * 10;
        const randomDelay = randomInt(2, 10) * 10;

        const startTime = end.plus({ minutes: randomDelayFromEnd });
        end = startTime.plus({ minutes: randomDelay });

        return {
            startTime: startTime.toUTC(),
            endTime: end.toUTC(),
        }
    });
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

api.listen(5000);
