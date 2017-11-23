<<<<<<< HEAD

=======
>>>>>>> e0a46eee521f430ca9986b28d527814f478f4216
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
