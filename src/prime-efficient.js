function primality(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    }
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i = i+2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

}
