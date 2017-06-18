/**
 * Created by joachimba on 10-6-2017.
 */

navigator.geolocation.getCurrentPosition(success, error);
function success(position) {

    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

    $.getJSON(GEOCODING).done(function (location) {
        $('#city').html(location.results[0].address_components[2].long_name);
    })

}

function error(err) {
    console.log(err)
}

