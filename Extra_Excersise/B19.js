//Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!
function S(x, n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        var tuso = 1
        for (let j = 1; j <= (2 * i + 1); j++) {
            tuso *= x;
        }

        var mauso = 1;
        for (let k = 1; k <= (2 * i + 1); k++) {
            mauso *= k
        }
        sum += tuso / mauso;
    }
    console.log("S(x,n) =" + sum);
}


S(2, 3);