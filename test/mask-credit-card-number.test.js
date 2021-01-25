const maskCreditCardNumber = require("../src/mask-credit-card-number");

describe("Mask Credit Card Number", () => {
    it("Should replaces all but the 1st and last 4 digits in the provided sequence", () => {
        expect(maskCreditCardNumber('4716578453389894')).toBe('4XXXXXXXXXXX9894');
    })
    it("Should not mask input shorter than 6 characters", () => {
        expect(maskCreditCardNumber('12345')).toBe('12345');
    })
    it("Should not mask non-numeric characters", () => {
        expect(maskCreditCardNumber('2720-9907-6285-5226')).toBe('2XXX-XXXX-XXXX-5226');
    })
    it("Should not mask non-numeric characters, even if first or last 4", () => {
        expect(maskCreditCardNumber('D720-9907-6285-JHSA')).toBe('D7XX-XXXX-6285-JHSA');
    })
    it('Should not fail with empty string', () => {
        expect(maskCreditCardNumber('')).toBe('');
    })
    it('Should not fail with undefined', () => {
        expect(maskCreditCardNumber(undefined)).toBe('');
    })
    it('Should not fail with only strings', () => {
        expect(maskCreditCardNumber('edison')).toBe('edison');
    })
})