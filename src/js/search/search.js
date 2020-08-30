import { fetchCountries } from '../rest/rest'
const searchItems = document.getElementById("searchItems");
const search = document.getElementById("search");
const BASE_URL = 'http://localhost:3000/'

export async function searchHandling() {
    let data = await fetchCountries()
    if (data.error) return
    fillSearchTable(data)
    
    search.addEventListener('input', () => {
        if (search.value.trim().length > 0) {
            searchItems.innerHTML = ''
            const query = data.filter((x) => {
                return (x.name + x.fullname)
                    .toLowerCase()
                    .match(search.value.toLowerCase());
            });
            fillSearchTable(query)
        }
        else{
            searchItems.innerHTML = ''
            fillSearchTable(data)
        }
    })
}
export function fillSearchTable(array) {
    
    for (let index = 0; index < array.length; index++) {
        const obj = array[index];
        searchItems.innerHTML += `<tr>
           <th scope='row'>${index + 1}</th>
           <td>${obj.name}</td>
           <td>${obj.fullname}</td>
           <td>${obj.dateOfIndependence}</td>
           <td>${obj.populationInMillions}</td>
           <td>
              <image 
                src="${(!obj.image.match('/')) ? (BASE_URL + obj.image) : obj.image}" alt="" style="width: 40px; height: 30px;">
              </image>
           </td>
           </tr>`;
    }
}
//src="${BASE_URL}/${obj.image.replace(BASE_URL,'')}" alt="" style="width: 40px; height: 30px;">
