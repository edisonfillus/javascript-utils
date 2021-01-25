const numberToOrdinal = require("../src/number-to-ordinal");

describe("Number to Ordinal", () => {
    it("Should not accept negatives", () => {
        expect(()=>numberToOrdinal(-1)).toThrow("Number should be greater or equal to 0");
        expect(()=>numberToOrdinal(-10001)).toThrow("Number should be greater or equal to 0");
    })
    it("Should not accept numbers greater than 10000", () => {
        expect(()=>numberToOrdinal(10001)).toThrow("Number should be less than or equal to 10000");
        expect(()=>numberToOrdinal(9999999)).toThrow("Number should be less than or equal to 10000");
    })
    it("Should convert numbers with st ending", () => {
        expect(numberToOrdinal(1)).toBe("1st");
        expect(numberToOrdinal(21)).toBe("21st");
        expect(numberToOrdinal(31)).toBe("31st");
        expect(numberToOrdinal(41)).toBe("41st");
        expect(numberToOrdinal(51)).toBe("51st");
        expect(numberToOrdinal(61)).toBe("61st");
        expect(numberToOrdinal(71)).toBe("71st");
        expect(numberToOrdinal(81)).toBe("81st");
        expect(numberToOrdinal(91)).toBe("91st");
        expect(numberToOrdinal(101)).toBe("101st");
        expect(numberToOrdinal(201)).toBe("201st");
        expect(numberToOrdinal(1001)).toBe("1001st");
        expect(numberToOrdinal(2001)).toBe("2001st");
    })
    it("Should convert numbers with nd ending", () => {
        expect(numberToOrdinal(2)).toBe("2nd");
        expect(numberToOrdinal(22)).toBe("22nd");
        expect(numberToOrdinal(32)).toBe("32nd");
        expect(numberToOrdinal(42)).toBe("42nd");
        expect(numberToOrdinal(52)).toBe("52nd");
        expect(numberToOrdinal(62)).toBe("62nd");
        expect(numberToOrdinal(72)).toBe("72nd");
        expect(numberToOrdinal(82)).toBe("82nd");
        expect(numberToOrdinal(92)).toBe("92nd");
        expect(numberToOrdinal(102)).toBe("102nd");
        expect(numberToOrdinal(202)).toBe("202nd");
        expect(numberToOrdinal(1002)).toBe("1002nd");
        expect(numberToOrdinal(2002)).toBe("2002nd");
    })
    it("Should convert numbers with rd ending", () => {
        expect(numberToOrdinal(3)).toBe("3rd");
        expect(numberToOrdinal(23)).toBe("23rd");
        expect(numberToOrdinal(33)).toBe("33rd");
        expect(numberToOrdinal(43)).toBe("43rd");
        expect(numberToOrdinal(53)).toBe("53rd");
        expect(numberToOrdinal(63)).toBe("63rd");
        expect(numberToOrdinal(73)).toBe("73rd");
        expect(numberToOrdinal(83)).toBe("83rd");
        expect(numberToOrdinal(93)).toBe("93rd");
        expect(numberToOrdinal(103)).toBe("103rd");
        expect(numberToOrdinal(203)).toBe("203rd");
        expect(numberToOrdinal(1003)).toBe("1003rd");
        expect(numberToOrdinal(2003)).toBe("2003rd");
    })
    it("Should convert numbers with th ending", () => {
        expect(numberToOrdinal(4)).toBe("4th");
        expect(numberToOrdinal(5)).toBe("5th");
        expect(numberToOrdinal(6)).toBe("6th");
        expect(numberToOrdinal(7)).toBe("7th");
        expect(numberToOrdinal(8)).toBe("8th");
        expect(numberToOrdinal(9)).toBe("9th");
        expect(numberToOrdinal(10)).toBe("10th");
        expect(numberToOrdinal(11)).toBe("11th");
        expect(numberToOrdinal(12)).toBe("12th");
        expect(numberToOrdinal(13)).toBe("13th");
        expect(numberToOrdinal(14)).toBe("14th");
        expect(numberToOrdinal(20)).toBe("20th");
        expect(numberToOrdinal(25)).toBe("25th");
        expect(numberToOrdinal(94)).toBe("94th");
        expect(numberToOrdinal(1000)).toBe("1000th");
        expect(numberToOrdinal(1004)).toBe("1004th");
        expect(numberToOrdinal(9999)).toBe("9999th");
        expect(numberToOrdinal(10000)).toBe("10000th");
    })
})