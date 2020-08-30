import Country from "../datamodel/country";

const COUNTRIESURL = "http://localhost:3000/countries";

export async function fetchCountries() {
    return await (await fetch(COUNTRIESURL).catch((err)=>{
        document.getElementById("fetchError").style.display = "block";
        return new Response(JSON.stringify({error:true}))
    })).json()
}
export async function getLength(){
    let data = await fetchCountries()
    if(data.error) return
    return data.length
} 
export async function postCountry(country){
    if(!(country instanceof Country))
        return new Response(JSON.stringify({postError:true}))

    return await (await fetch(COUNTRIESURL,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(country)
    }).catch((err)=>{
        return new Response(JSON.stringify({postError:true}))
    })).json()
} 