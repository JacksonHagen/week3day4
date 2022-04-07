import { generateId } from "../Utils/generateId.js"


export class Trip {
    constructor(data) {
        this.name = data.name
        this.id = generateId()
    }

    get Template() {
        return /*html*/`
        <div class="col col-md-2 border border-secondary">
            <h5 onclick="app.tripsController.setActiveTrip(${this.id})">Disneyland</h5>
            <!-- TODO inject reservations -->
        </div>
        `
    }
}