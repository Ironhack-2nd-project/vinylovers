// var x = document.getElementById("demo");
function getLocation() {
  console.log('dentro getloc');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

getLocation();

document.getElementById(latitude).value = position.coords.latitude;
document.getElementById(longitude).value = position.coords.longitude;
