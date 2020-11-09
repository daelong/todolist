const COORDS_LS = "coords";

function saveCoords(coords) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}
function handleGeoError() {
  console.log("sorry, can't find you location");
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init() {
  getUserLocation();
}
init();
