import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";

function _drawReservations() {
  let activeReservations = ProxyState.reservations.filter(r => r.tripId == ProxyState.activeTrip.id);
  let template = "";
  activeReservations.forEach((r) => (template += r.Template));
  document.getElementById("reservations").innerHTML = template;
}

export class ReservationsController {
  constructor() {
    _drawReservations();
    ProxyState.on("reservations", _drawReservations);
    ProxyState.on("trips", _drawReservations);
  }

  addReservation() {
    window.event.preventDefault()
    try {
        /** @type {HTMLFormElement} */
        //@ts-ignore
      const form = window.event.target;
      const formData = {    
        tripId: ProxyState.activeTrip.id,
        type: form.type.value,
        name: form.resName.value,
        confirmNum: form['confirmation-number'].value,
        addy: form.address.value,
        date: form.resDate.value,
        notes: form.notes.value,
        cost: form.cost.value
      }
      reservationsService.addReservation(formData)
      form.reset()
    } catch (error) {
        console.error('[ADD RESERVATION ERROR]', error.message)
    }
  }
}
