function primeFactors(n) {
    var factors = [];
    var d = 2;
    while (n > 1) {
        while (n % d === 0) {
            factors.push(d);
            n = n/d;
        }
        d++;
        if (d*d > n && n > 1) {
            factors.push(n);
            break;
        }
    }
    return factors;
}

console.log( primeFactors(600851475143) );

