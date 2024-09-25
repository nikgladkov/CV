import { faker } from "@faker-js/faker";
var Cargo = /** @class */ (function () {
    function Cargo() {
        this.trackingId = faker.string.uuid();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        };
    }
    return Cargo;
}());
export { Cargo };
//# sourceMappingURL=Cargo.js.map