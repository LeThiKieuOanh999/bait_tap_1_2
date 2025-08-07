// Tính S(n) = x^2 + x^4 + ... + x^2n
function S(x, n) {
    var sum = 0;

    for (let i = 1; i <= n; i++) {
        let power = 1;

        // Tính x^(2i)
        for (let j = 1; j <= 2 * i; j++) {
            power *= x;
        }

        sum += power;
    }

    console.log("S(n) = " + sum);
}

S(2, 2);