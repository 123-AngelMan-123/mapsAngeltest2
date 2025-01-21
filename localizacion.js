let map;



async function initMap() {
    const position = { lat: 2.4912353, lng: -76.5595441 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("mapa"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
}







function obtenerubicacion(){
    navigator.geolocation.getCurrentPosition(function(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(`latitud:${lat} - Longitud:${lng}`)
        document.getElementById("info").textContent = `latitud:${lat} - Longitud:${lng}`;

        map.setCenter({lat,lng});
        map.setZoom(17);

        new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: { lat, lng },
            title: "punto de ubicación"
        });
        




    }, function(error){
        console.log(`Error:${error}`);
    });

}

document.getElementById("btn").addEventListener("click",obtenerubicacion);

//latitud:2.4912353 - Longitud:-76.5595441
