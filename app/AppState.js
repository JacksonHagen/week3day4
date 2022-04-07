import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

let trip1 = new Trip({name: 'Disneyland'})
let trip2 = new Trip({name: 'New York'})
let trip3 = new Trip({name: 'Seattle'})

let res1 = new Reservation({tripId: trip1.id, type: '✈️', name: 'BOI to LAX', confirmNum: '14AX58', addy: '123 Airport St.', date: '4/10/22', notes: 'idk dude fly or sum', cost: 567})
let res2 = new Reservation({tripId: trip1.id, type: '✈️', name: 'BOI to LAX', confirmNum: '14AX58', addy: '123 Airport St.', date: '4/10/22', notes: 'idk dude fly or sum', cost: 567})

class AppState extends EventEmitter {
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [trip1, trip2, trip3]
  activeTrip = trip1

  reservations = [res1, res2]
}
// ProxyState.reservations = value
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    // console.log('getting', target, prop);
    // NOTE shows them firing
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    // console.log('setting', target, prop, value);
    // NOTE shows them firing
    return true
  }
})
