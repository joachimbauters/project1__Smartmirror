/**
 * Created by joachimba on 10-6-2017.
 */


navigator.geolocation.getCurrentPosition(success, error);
function success(position) {

    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

    $.getJSON(GEOCODING).done(function (location) {
        $('#city').html(location.results[0].address_components[2].long_name);

        var weer = new XMLHttpRequest();
        weer.open("GET", "http://api.wunderground.com/api/0cd7adf7bde0edea/conditions/q/CA/Zulte.json", false);
        weer.send(null);

        var r = JSON.parse(weer.response);
        var temp = r.current_observation.temp_c + "ºC";
        var icon = r.current_observation.icon_url;

        document.getElementById("temp").innerHTML = temp;
        document.getElementById("icon").innerHTML = "<img src='" + icon + "' width='100px' height='100px'>";

    })


}




