var mymap = L.map('mapid').setView([51.491813, -3.169616], 14);
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
    maxZoom: 18,
}).addTo(mymap);
var glenroy = L.circle([51.491813, -3.169616], {
    color: '#a12a2a',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);
var mackintosh = L.circle([51.493712, -3.172461], {
    color: '#a12a2a',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);

glenroy.on('click', e => {
    window.open(`https://www.google.com/maps/search/?api=1&query=51.491813,-3.169616&query_place_id=EhxHbGVucm95IFN0LCBDYXJkaWZmIENGMjQsIFVLIi4qLAoUChIJ0SWjNsAcbkgR3RVu5ESw8BYSFAoSCamRx0IRO1oCEXoliDJDoPjE`, "_blank")
})
mackintosh.on('click', e => {
    window.open(`https://www.google.com/maps/search/?api=1&query=51.493712,-3.172461&query_place_id=Eh9NYWNLaW50b3NoIFBsLCBDYXJkaWZmIENGMjQsIFVLIi4qLAoUChIJ-yrJHZUcbkgRRRw6sv8W-KsSFAoSCamRx0IRO1oCEXoliDJDoPjE`, "_blank")
})