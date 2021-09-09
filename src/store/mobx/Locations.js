import { makeAutoObservable } from 'mobx';

class Locations {
    locations = new Map();
    constructor() {
        makeAutoObservable(this);
    }
    createFromArray(json = []) {
        this.locations.clear();
        json.forEach((location) => this.addLocation(location.id, location.name));
    }
    addLocation(id, name) {
        this.locations.set(id, new Location(name));
    }
    getLocationName(locationId) {
        return this.locations.get(locationId)?.name || '';
    }
}

class Location {
    name;
    constructor(name) {
        this.name = name;
    }
}

export default new Locations();
