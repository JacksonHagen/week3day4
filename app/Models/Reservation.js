import { generateId } from "../Utils/generateId.js"


export class Reservation {
    constructor(data) {
        this.id = generateId()
        this.tripId = data.tripId
        this.type = data.type
        this.name = data.name
        this.confirmNum = data.confirmNum
        this.addy = data.addy
        this.date = data.date
        this.notes = data.notes
        this.cost = data.cost 
    }

    get Template() {
        return /*html*/ `
        <div class="row mt-3 pt-2 justify-content-center">
            <div class="col-md-2 bg-secondary">
                ${this.type}
            </div>
            <div class="col-md-2 bg-secondary">
                ${this.name}
            </div>
            <div class="col-md-2 bg-secondary">
                ${this.confirmNum}
            </div>
            <div class="col-md-3 bg-secondary">
                ${this.addy}
            </div>
            <div class="col-md-1 bg-secondary d-flex justify-content-center">
                ${this.date}
            </div>
            <div class="col-md-1 bg-secondary d-flex justify-content-center">
            <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#modal-${this.id}">
            📝
            </button>
            </div>
            <div class="col-md-1 bg-secondary d-flex justify-content-center">
                ${this.cost}
            </div>
        </div>

        <!-- Modal -->
            <div class="modal fade" id="modal-${this.id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">${this.name} Notes</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ${this.notes}
                    </div>
                    <div class="modal-footer justify-content-center">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
        `
    }
}