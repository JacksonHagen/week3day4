import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {
    addReservation(formData) {
        let newRes = new Reservation(formData)
        console.log(newRes);
        ProxyState.reservations = [...ProxyState.reservations, newRes]
        console.log(ProxyState.reservations);
    }

}

export const reservationsService = new ReservationsService()