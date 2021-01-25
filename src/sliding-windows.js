function longestSubstringWithoutDuplicates(s = "") {
    let leftWindow = 0;
    let longestString = "";
    let counts = new Map();

    for (let rightWindow = 0; rightWindow < s.length;) {
        const letter = s[rightWindow];
        counts.set(letter, counts.get(letter) ? counts.get(letter) + 1 : 1);

        if (Array.from(counts.values()).some((element) => element > 1)) { // if any elements in counts are duplicates (n > 1)
            counts.set(s[leftWindow], counts.get(s[leftWindow]) - 1); // decrement the element at leftWindow by 1, since the character is no longer in the window
            leftWindow += 1; // increment leftWindow to evaluate the next substring
        }

        const windowSize = rightWindow - leftWindow + 1;

        if (windowSize > longestString.length) {
            longestString = s.substring(leftWindow, rightWindow + 1);
        }
        rightWindow += 1;
    }

    return longestString;
}

module.exports = {
    longestSubstringWithoutDuplicates
}