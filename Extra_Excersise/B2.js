//Tính S(n) = 1^2 + 2^2 + ... + n^2
var n = 4
var sum = 0
function S(n){
    for( let i = 0; i <=n; i++){
        sum +=i*i
    }
    console.log("S(n) = " + sum); 
}
S(n);