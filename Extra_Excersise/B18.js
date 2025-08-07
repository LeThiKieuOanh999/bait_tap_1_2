//Tính S(n) = 1 + x^2/2! + x^4/4! + ... + x^2n/(2n)!
function S(x, n) {
    var sum = 0;

    for (let i = 1; i <= n; i++) {
        var tuso = 1;
        for (let k = 1; k <= 2 * i; k++) {
            tuso *= x;
        }

        var mauso = 1;
        for (let j = 1; j <= 2 * i; j++) {
            mauso *= j;
        }

        sum += tuso / mauso;
    }

    console.log("S(x,n) = " + sum);
}
S(2,3);