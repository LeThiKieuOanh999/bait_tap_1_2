//Tính S(n) = x + x^2 + x^3 + ... + x^n
function S(x, n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        let power = 1;
        for (let j = 1; j <= i; j++) {
            power *= x;
        } 
        sum += power;
    }

    console.log("S(n) = " + sum);
}

S(2, 5);