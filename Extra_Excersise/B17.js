//Tính S(n) = x + x^2/2! + x^3/3! + ... + x^n/N!
function S(x, n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {

        var tuso = 1
        for (j = 1; j <= i; j++) {
            tuso *= x;
        }


        var mauso = 1;
        for (let k = 1; k <= i; k++) {
            mauso *= k;
        }
        sum += tuso / mauso;

    }
     console.log("S(x,n) =" + sum);
}
S(2,3); 