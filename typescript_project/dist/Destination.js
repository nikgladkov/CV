import { faker } from "@faker-js/faker";
var Destination = /** @class */ (function () {
    function Destination() {
        this.receiver = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lon: faker.location.longitude(),
        };
    }
    return Destination;
}());
export { Destination };
//# sourceMappingURL=Destination.js.map