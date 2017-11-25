/** User Tracker Class **/

var track = track || {};

track._page = 'Resume';

track._getIP = function () {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://deepakkupendrad.000webhostapp.com/ip.php', false);
    request.send(null);

    if (request.status === 200) {
        return request.responseText;
    }

}

track._getGEolocation = function (ip) {

    var request = new XMLHttpRequest();
    ip = ip.slice(1, -1);
    request.open('GET', 'http://ip-api.com/json/' + ip, false);
    request.send(null);

    if (request.status === 200) {
        return request.responseText;
    }


}

track._updateRecord = function () {

    var ip = track._getIP();
    var Json = track._getGEolocation(ip);
    var Geolocation = JSON.parse(Json);

    var lat = Geolocation.lat;
    var lon = Geolocation.lon;
    var browser = navigator.userAgent;
    var page = track._page;
    ip = ip.slice(1, -1);

    // Url Construct
    var Url = "https://deepakkupendrad.000webhostapp.com/tracker.php?" + "ip=" + ip + "&browser=" + browser + "&page=" + page + "&lat=" + lat + "&long=" + lon + "&json=" + Json;

    var request = new XMLHttpRequest();
    request.open('GET', Url, false);
    request.send(null);

    if (request.status === 200) {
        console.log('tracked..');
    }

}
