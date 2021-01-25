function Car() {
    this.wheels = 4;
    this.lamp = 2;
    this.fuel = 100;
    this.distance = 0;
}

Car.prototype.run = function () {
    if (this.fuel > 0) {
        this.distance = this.distance + 2;
        this.fuel = this.fuel - 5;
    }
}


class Motorcycle {

    wheels = 2;
    lamp = 1;
    fuel = 100;
    distance = 0;

    constructor() {
    }

    run() {
        if (this.fuel > 0) {
            this.distance = this.distance + 2;
            this.fuel = this.fuel - 2;
        }
    }

}

module.exports = {
    Motorcycle,
    Car
};
