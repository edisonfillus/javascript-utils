function isAnagram(a, b) {

    if (a.length !== b.length) {
        return false;
    }

    if (a === b) {
        return true;
    }

    let buckets = {};

    for (let letter of a.split('')) {
        buckets[letter] = (buckets[letter] ?? 0) + 1;
    }

    for (let letter of b.split('')) {
        buckets[letter] = (buckets[letter] ?? 0) - 1;
    }

    for (let letter in buckets) {
        if (buckets[letter] !== 0) {
            return false;
        }
    }

    return true;

}

module.exports = isAnagram;
