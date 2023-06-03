const apiUrl="https://api.wheretheiss.at/v1/satellites/25544"

async function obtenerPosicion(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()

        console.log("Data de la api:", data.altitude
        );
        document.getElementById("lat").innerHTML = data.latitude
        document.getElementById("lon").innerHTML = data["longitude"]
    }
    catch(error) {console.log('Ocurrió un error grave', error)}
}

obtenerPosicion()