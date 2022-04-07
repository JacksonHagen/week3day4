import { ProxyState } from "../AppState.js"

class TripsService {
    setActiveTrip(tripId) {
        ProxyState.activeTrip = ProxyState.trips.find(t => t.id == tripId)
    }

}

export const tripsService = new TripsService()