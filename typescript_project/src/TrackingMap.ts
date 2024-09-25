import { Destination } from "./Destination";
import { Cargo } from "./Cargo";

export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 20,
      },
      mapId: "f9e0d97ecb79d54d",
    });
  }

  attachMarker(entity: Destination | Cargo): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lon,
      },
    });
  }
}
