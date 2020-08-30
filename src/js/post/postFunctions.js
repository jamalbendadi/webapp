import { getLength, postCountry } from '../rest/rest'
import  Country  from '../datamodel/country'
const countryNamePost = document.getElementById("countryNamePost");
const officialNamePost = document.getElementById("officialNamePost");
const dateOfIndependencePost = document.getElementById(
    "dateOfIndependencePost"
);
const popInMilPost = document.getElementById("popInMilPost");
const flagUrlPost = document.getElementById("flagUrlPost");
const form = document.getElementById("nieuw_country");
export async function formEventListener() {
    form.addEventListener("submit",(e) => handleEvent(e))
}
async function handleEvent(e) {
    e.preventDefault()
    let length = await getLength()
    const country = new Country(length + 1,
        countryNamePost.value,
        officialNamePost.value,
        dateOfIndependencePost.value,
        popInMilPost.value,
        flagUrlPost.value)

    let result = await postCountry(country)
    if (result.postError) {
        document.getElementById("addResult").style.display = "block";
        document.getElementById("addResult").innerHTML =
            '<div class="alert alert-danger" style="display: inline-block; width: 55%;">Het land kon niet toegevoegd worden</div>';
    }
    else {
        console.log(result)
        document.getElementById("addResult").style.display = "block";
        document.getElementById("addResult").innerHTML =
            '<div class="alert alert-success" style="display: inline-block; width: 55%;">Succes! Het land is toegevoegd</div>';
        //refreshSearchTable();
    }
}