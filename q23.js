var asiriSayi = function(){
    var memo = [];
    return function(n) {
        var is = memo[n];
        if (typeof is !== 'boolean') {
            var sum = 0;
            for (var i = 1; i <= n/2; i++) {
                if (n % i === 0) {
                        sum += i;
                }
            }
            is = sum > n;
            memo[n] = is;
        }
        return is;
    };
}();

function asiriSayiToplam(n) {
    for (var i = 1; i <= n/2; i++) {
        if (asiriSayi(i) && asiriSayi(n-i)) {
            return true;
        }
    }
    return false;
}

function asiriSayiOlmayan(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (asiriSayiToplam(i)) continue;
        sum += i;
    }
    return sum;
}

console.log( asiriSayiOlmayan(28123) );
