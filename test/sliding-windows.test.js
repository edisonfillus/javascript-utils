const {longestSubstringWithoutDuplicates} = require("../src/sliding-windows");

describe("Longest substring without duplicates",()=>{

    it("Should return empty if empty string",()=>{
        const input = "";
        const expected = "";

        const result = longestSubstringWithoutDuplicates(input);

        expect(result).toBe(expected);

    })

    it("Should return wke if pwwkew",()=>{
        const input = "pwwkew";
        const expected = "wke";

        const result = longestSubstringWithoutDuplicates(input);

        expect(result).toBe(expected);

    })



})