// Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n + 1)
var n = 5;
var sum = 0;
function S(n) {
    for(let i= 1; i< n; i++){
        sum += 1/(2*i + 1);
    }
    console.log("S(n) = " + sum);
}
S(n);