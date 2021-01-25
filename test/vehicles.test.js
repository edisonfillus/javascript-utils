const {Motorcycle,Car} = require("../src/vehicles");

describe("Motorcycle",()=>{
    it("Should have 2 wheels and 1 lamp",()=>{
        const motorcycle = new Motorcycle();
        expect(motorcycle.wheels).toBe(2);
        expect(motorcycle.lamp).toBe(1)
    })
    it("Should run while has fuel",()=>{
        const motorcycle = new Motorcycle();
        while(motorcycle.fuel>0){
            motorcycle.run();
        }
        expect(motorcycle.fuel).toBe(0);
        expect(motorcycle.distance).toBeGreaterThan(0);
    })
})

describe("Car",()=>{
    it("Should have 4 wheels and 2 lamp",()=>{
        const car = new Car();
        expect(car.wheels).toBe(4);
        expect(car.lamp).toBe(2);
    })
    it("Should run while has fuel",()=>{
        const car = new Car();
        while(car.fuel>0){
            car.run();
        }
        expect(car.fuel).toBe(0);
        expect(car.distance).toBeGreaterThan(0);
    })
})