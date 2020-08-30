import { fetchCountries } from '../rest/rest'

const BASE_URL = 'http://localhost:3000/'
const cardList = document.getElementById('card_list')

export async function showCards() {
    let data = await fetchCountries()
        if (data.error) return
    data.forEach((item) => {
        addCard(item.name,item.image, item.fullname, item.populationInMillions, item.dateOfIndependence)
    })
}
function addCard(name, url, fullname, popInM, date) {
    cardList.innerHTML += `<div class="card mb-5" style="width: 80%;">
        <div class="card-body">
            <h5 class="card-title display-4" ">${name}</h5>
            <div class="pb-4 p-2">
                <img src="${(!url.match('/')) ? (BASE_URL + url) : url}" class="img-fluid" alt="flag" style="width: 15em; height: 10em;"></img>
            </div>
                <h7 class="text-muted font-italic">${fullname}</h7>
            <hr class="my-3">
            <div class="container">
                    <div class="row">
                        <label class="mb-2 text-muted col-md-6"><b>Population in million</b></label>
                        <label class="mb-2 text-muted col-md-6">${popInM}</label>
                    </div>
                    <div class="row">
                        <label class="mb-2 text-muted col-md-6"><b>Date of independence</b></label>
                        <label class="mb-2 text-muted col-md-6">${date}</label>
                    </div>

                </div>
                    </div>
        </div>`
}
