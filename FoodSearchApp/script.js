function initMap() {
    const userLatLng = {};
    navigator.geolocation.getCurrentPosition(s);

    function s(position) {
        userLatLng.lat = position.coords.latitude;
        userLatLng.lng = position.coords.longitude;
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        center: userLatLng,
        zoom: 18,
        mapId: "8d193001f940fde3",
    });

    const service = new google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");

    moreButton.onclick = function() {
        moreButton.disabled = true;
        if (getNextPage) {
            getNextPage();
        }
    };


    service.nearbySearch({ location: userLatLng, radius: 5000, type: "bar" },
        (results, status, pagination) => {
            if (status !== "OK" || !results) return;

            addPlaces(results, map);
            moreButton.disabled = !pagination || !pagination.hasNextPage;
            if (pagination && pagination.hasNextPage) {
                getNextPage = () => {
                    pagination.nextPage();
                };
            }
        }
    );
}

function addPlaces(places, map) {
    const placesList = document.getElementById("places");

    for (const place of places) {
        if (place.geometry && place.geometry.location) {
            const image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            new google.maps.Marker({
                map,
                icon: image,
                title: place.name,
                position: place.geometry.location,
            });

            const li = document.createElement("li");

            li.textContent = place.name;
            placesList.appendChild(li);
            li.addEventListener("click", () => {
                map.setCenter(place.geometry.location);
            });
        }
    }
}