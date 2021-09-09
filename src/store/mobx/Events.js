import { makeAutoObservable } from 'mobx';

class Events {
    eventsPerLocation = new Map();
    constructor() {
        makeAutoObservable(this);
    }
    createFromArray(json) {
        this.eventsPerLocation.clear();
        json.forEach(({ location, insight, events }) => {
            if (!this.eventsPerLocation.has(location)) {
                this.eventsPerLocation.set(location, new LocationData());
            }
            const locationObject = this.eventsPerLocation.get(location);
            locationObject.addInsight(insight, events);
        });
    }
    getLocationIds() {
        return [...this.eventsPerLocation.keys()];
    }
    getLocationData(locationId) {
        return this.eventsPerLocation.get(locationId);
    }
}

class LocationData {
    eventsPerInsightData = new Map();
    constructor() {
        makeAutoObservable(this);
    }
    addInsight(insightId, events) {
        const eventsData = events.map(
            ({ startTime, endTime }) => new Event(startTime, endTime)
        );
        eventsData.sort((a, b) => {
            return a.startTime - b.startTime;
        });
        this.eventsPerInsightData.set(insightId, eventsData);
    }
    getInsightsIds() {
        return [...this.eventsPerInsightData.keys()];
    }
    getEventsPerInsight(insightId) {
        return this.eventsPerInsightData.get(insightId);
    }
}

class Event {
    startTime;
    endTime;
    constructor(startTime, endTime) {
        makeAutoObservable(this);
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
    }
}

export default new Events();
