import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";

const destination = new Destination();
const cargo = new Cargo();

const trackingMap = new TrackingMap("g-map");

trackingMap.attachMarker(destination);
trackingMap.attachMarker(cargo);

const elementDest = document.getElementById("dest-info");
const curRecivier = destination.receiver.toString();
elementDest.insertAdjacentHTML(
  "beforeend",
  `<label><i>Recivier:</i> ${curRecivier}</label><i style="opacity:0.5"> via Faker</i>`
);

const elementCargo = document.getElementById("cargo-info");
const curCargo = cargo.trackingId.toString();
elementCargo.insertAdjacentHTML(
  "beforeend",
  `<label><i>Track Id:</i> ${curCargo}</label><i style="opacity:0.5"> via Faker</i>`
);

const refreshBtn = document.querySelector("#refresh-btn");
if (refreshBtn) {
  refreshBtn.addEventListener("click", function () {
    window.location.reload();
  });
}