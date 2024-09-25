import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
var destination = new Destination();
var elementDest = document.getElementById("dest-info");
var curRecivier = destination.receiver.toString();
elementDest.insertAdjacentText("beforeend", "<div>" + "".concat(curRecivier) + "</div>");
var cargo = new Cargo();
console.log(cargo);
new google.maps.Map(document.getElementById("g-map"), {
    zoom: 10.6,
    center: {
        lat: 0,
        lng: 20,
    },
});
//# sourceMappingURL=ts_index.js.map