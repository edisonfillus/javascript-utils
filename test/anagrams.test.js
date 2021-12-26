const isAnagram = require("../src/anagrams");

describe("Anagrams", () => {
    it("Different lengths, should be false", () => {
        expect(isAnagram("abc", "cbadsd")).toBe(false);
    })
    it("Should be an anagram", () => {
        expect(isAnagram("aba", "aba")).toBe(true);
        expect(isAnagram("abc", "cba")).toBe(true);
        expect(isAnagram("baba", "abab")).toBe(true);
        expect(isAnagram("abba", "abba")).toBe(true);
    })
    it("Should not be an anagram", () => {
        expect(isAnagram("abc", "abd")).toBe(false);
        expect(isAnagram("baba", "abbb")).toBe(false);
        expect(isAnagram("abba", "aaba")).toBe(false);
    })

})
