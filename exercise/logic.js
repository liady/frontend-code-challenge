const { DateTime } = require('luxon');
const locations = require('./locations.json');
const insights = require('./insights.json');

exports.randomCombinations = function randomCombinations() {
    const now = DateTime.local().startOf('minute');

    return locations.flatMap((location) =>
        insights.map((insight) => ({
            location: location.id,
            insight: insight.id,
            events: randomEvents(now),
        }))
    );
};

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
        };
    });
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
