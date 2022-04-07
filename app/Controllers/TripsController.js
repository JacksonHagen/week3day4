import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"

function _drawTrips() {
    let template = ''
    ProxyState.trips.forEach(t => template += t.Template)
    document.getElementById('trips').innerHTML = template
}
export class TripsController {
    constructor() {
        _drawTrips()
        ProxyState.on('activeTrip', _drawTrips)
    }

    setActiveTrip(id) {
        tripsService.setActiveTrip(id)
    }
}