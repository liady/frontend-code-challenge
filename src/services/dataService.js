import axios from 'axios';
import eventsStore from '../store/mobx/Events';
import insightsStore from '../store/mobx/Insights';
import locationsStore from '../store/mobx/Locations';

const Endpoints = {
    LOCATIONS: 'locations',
    EVENTS: 'events',
    INSIGHTS: 'insights',
};

function createEndpoint(endpoint) {
    return `http://localhost:5000/${endpoint}`;
}

export async function refreshData() {
    const [locations, insights, events] = await fetchAllData();
    eventsStore.createFromArray(events.data);
    locationsStore.createFromArray(locations.data);
    insightsStore.createFromArray(insights.data);
}

function fetchAllData() {
    return Promise.all([fetchLocations(), fetchInsights(), fetchEvents()]);
}

function fetchLocations() {
    return axios.get(createEndpoint(Endpoints.LOCATIONS));
}
function fetchEvents() {
    return axios.get(createEndpoint(Endpoints.EVENTS));
}
function fetchInsights() {
    return axios.get(createEndpoint(Endpoints.INSIGHTS));
}
