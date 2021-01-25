const expressionCalculator = require("../src/expression-calculator")

describe("Expression Calculator",()=>{
    it("Should return 0 if no expression is provided",()=>{
        expect(expressionCalculator('')).toBe(0);
        expect(expressionCalculator(undefined)).toBe(0);
    })
    it("Should return the last value if no operations are provided",()=>{
        expect(expressionCalculator('2 3')).toBe(3);
    })
    it("Should evaluate expression and sum the previous 2 numbers",()=>{
        expect(expressionCalculator('2 3 +')).toBe(5);
        expect(expressionCalculator('2 3 1 + +')).toBe(6);
    })
    it("Should evaluate expression and subtract the previous 2 numbers",()=>{
        expect(expressionCalculator('3 2 -')).toBe(1);
        expect(expressionCalculator('3 4 2 - -')).toBe(1);
    })
    it("Should evaluate expression and multiply the previous 2 numbers",()=>{
        expect(expressionCalculator('3 2 *')).toBe(6);
        expect(expressionCalculator('2 3 2 * *')).toBe(12);
    })
    it("Should evaluate expression and divide the previous 2 numbers",()=>{
        expect(expressionCalculator('6 2 /')).toBe(3);
        expect(expressionCalculator('6 9 3 / /')).toBe(2);
    })

    it("Should evaluate many different expressions",()=>{
        expect(expressionCalculator('6 2 + 7 -')).toBe(1);
        expect(expressionCalculator('6 2 * 3 /')).toBe(4);
        expect(expressionCalculator('6 2 * 3 / 2 + 2 /')).toBe(3);
        expect(expressionCalculator('1 1 + 1 1 + +')).toBe(4);
    })

});
