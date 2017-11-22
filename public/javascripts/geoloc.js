//
// //GEOLOCATION
// function getLocation() {
//   var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
//
//   function success(pos) {
//     var crd = pos.coords;
//     console.log(`Las coordenadas de crd: ${crd}`);
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//     return crd;
//   };
//
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   };
//
//   navigator.geolocation.getCurrentPosition(success, error, options);
// }

// var x = document.getElementById("demo");

function showPosition(position) {
  const { latitude, longitude } =  position.coords;
  document.getElementById("latitude").value = latitude;
  document.getElementById("longitude").value = longitude;
  console.log(`Lat:${latitude} Lng:${longitude}`);
}

function getLocation() {
  console.log('dentro getloc');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}
window.onload = getLocation();
