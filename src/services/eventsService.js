const MS_IN_HOUR = 1000 * 60 * 60;
const severityColorMap = {
    extreme: '#FF9AA2',
    moderate: '#FFDAC1',
    minor: '#E2F0CB',
};

export function getLengthAndOffset(eventData) {
    const length = (eventData.endTime - eventData.startTime) / MS_IN_HOUR;
    const offset = eventData.startTime.getMinutes() / 60;
    return { length, offset };
}

export function getColorFromSeverity(severity) {
    return severityColorMap[severity] || 'black';
}

export function getHoursToShow() {
    const start = new Date();
    start.setMinutes(0);
    return [...Array(5)].map(
        (_, index) => new Date(start.getTime() + index * MS_IN_HOUR)
    );
}

export function isInsideHour(eventData, startTime) {
    return (
        eventData.startTime >= startTime &&
        eventData.startTime < new Date(startTime.getTime() + MS_IN_HOUR)
    );
}
