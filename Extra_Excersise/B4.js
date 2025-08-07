//Tính S(n) = ½ + ¼ + ... + 1/2n
var n =5
var sum = 0
function S(n) {
    for (let i= 1; i <= n; i++){
        sum += 1/(2*i);
    }
    console.log("S(n) = " + sum);
}
S(n);