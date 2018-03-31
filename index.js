function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {
            lat: 37.276759, 
            lng: -121.771754
        }
    });
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map,
        panel: document.getElementById('right-panel')
    });
    directionsDisplay.addListener('directions_changed', function() {
        computeTotalDistance(directionsDisplay.getDirections());
    });
    displayRoute('San Fransico, CA', 'San Jose, CA', directionsService, directionsDisplay);   
}
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: {
//         lat: -24.345,
//         lng: 134.46
//       }
//     });
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer({
//       draggable: true,
//       map: map,
//       panel: document.getElementById('right-panel')
//     });
//     directionsDisplay.addListener('directions_changed', function() {
//       computeTotalDistance(directionsDisplay.getDirections());
//     });
//     displayRoute('Perth, WA', 'Sydney, NSW', directionsService, directionsDisplay);
//   }
 
function displayRoute(origin, destination, service, display) {
    service.route({
        origin: origin,
        destination: destination,
        waypoints: [{
            location: 'San Mateo, CA'
        }, {
            location: 'Santa Cruz,CA'
        }],
        travelMode: 'DRIVING',
        avoidTolls: true
    }, function(response, status) {
        if (status == 'OK') {
            display.setDirections(response);
        } else {
            alert('Could not display directions due to: ' + status);
        }
    });
}
//   function displayRoute(origin, destination, service, display) {
//     service.route({
//       origin: origin,
//       destination: destination,
//       waypoints: [{
//         location: 'Adelaide, SA'
//       }, {
//         location: 'Broken Hill, NSW'
//       }],
//       travelMode: 'DRIVING',
//       avoidTolls: true
//     }, function(response, status) {
//       if (status === 'OK') {
//         display.setDirections(response);
//       } else {
//         alert('Could not display directions due to: ' + status);
//       }
//     });
//   }
  
function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i =0; i < myroute.legs.length; i++) {
        total +=  myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById('total').innerHTML = total + ' mi';
}
//   function computeTotalDistance(result) {
//     var total = 0;
//     var myroute = result.routes[0];
//     for (var i = 0; i < myroute.legs.length; i++) {
//       total += myroute.legs[i].distance.value;
//     }
//     total = total / 1000;
//     document.getElementById('total').innerHTML = total + ' km';
//   }


// $(initMap)


///////////////////////////////GOOGLE EXAMPLE////////////////////////////////////////////
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: {
//         lat: -24.345,
//         lng: 134.46
//       }
//     });
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer({
//       draggable: true,
//       map: map,
//       panel: document.getElementById('right-panel')
//     });
//     directionsDisplay.addListener('directions_changed', function() {
//       computeTotalDistance(directionsDisplay.getDirections());
//     });
//     displayRoute('Perth, WA', 'Sydney, NSW', directionsService, directionsDisplay);
//   }
  
//   function displayRoute(origin, destination, service, display) {
//     service.route({
//       origin: origin,
//       destination: destination,
//       waypoints: [{
//         location: 'Adelaide, SA'
//       }, {
//         location: 'Broken Hill, NSW'
//       }],
//       travelMode: 'DRIVING',
//       avoidTolls: true
//     }, function(response, status) {
//       if (status === 'OK') {
//         display.setDirections(response);
//       } else {
//         alert('Could not display directions due to: ' + status);
//       }
//     });
//   }
  
//   function computeTotalDistance(result) {
//     var total = 0;
//     var myroute = result.routes[0];
//     for (var i = 0; i < myroute.legs.length; i++) {
//       total += myroute.legs[i].distance.value;
//     }
//     total = total / 1000;
//     document.getElementById('total').innerHTML = total + ' km';
//   }
  