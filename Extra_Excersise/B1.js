//Tính S(Sn) = 1 + 2 + 3 + … + n.
var n = 6
var sum = 0
function S(n) {
    for (let i = 0; i <=n; i++)
    sum += i
    console.log("S(" + n + ") = " + sum);
    return sum;
}
S(n);