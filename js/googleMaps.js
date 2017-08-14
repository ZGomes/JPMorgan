var map;
var marker;
var position;
var place;
var infoWindow;
var placeId;

function initMap(){
    placeId = 'ChIJJZC53kNYzpQRPubHi4UZNrI'
    position = {lat: -23.5365517, lng: -46.6463026}
    infoWindow = new google.maps.InfoWindow()
    placeMap()
    placeLocation()
    placeMarker()
}

function placeMap() {
    // THE MAP STYLE
    let style = new google.maps.StyledMapType(
        [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d3c1f0"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#bfa6ea"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": -70
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": -100
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7c47d3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#966bdc"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#7c47d3"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#743ad0"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c7d5fa"
                    }
                ]
            }
        ],
        {name: 'Styled Map'}
    )

    // CREATE THE MAP INSTANCE
    map = new google.maps.Map(document.querySelector("#mapCustom"), {
        center: position,
        zoom: 18,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    })
    // SET THE MAP STYLE
    map.mapTypes.set('styled_map', style)
    // SET THE MAP ID
    map.setMapTypeId('styled_map')

}

// CREATE THE MARKER AND PLACE IT
function placeMarker(){
    marker = new google.maps.Marker(
        {
            position: position,
            map: map,
            title: 'SENAI de Informática',
            icon: 'images/marker.png'
        }
    )
    marker.addListener('click', markerOnClick)
    marker.setMap(map)
}

// SET THE LOCATION BY THE PLACE ID
function placeLocation(){
    let service = new google.maps.places.PlacesService(map)
    service.getDetails({
        placeId: placeId
    },function (result, status) {
        if(status === google.maps.places.PlacesServiceStatus.OK){
            place = result
            position = place.geometry.location
        }
    })
}

// CREATE THE BOUNCE STYLE AND SET THE INFO WINDOW
function markerOnClick() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            place.formatted_address + '</div>');
        infoWindow.open(map, this);
    }
}