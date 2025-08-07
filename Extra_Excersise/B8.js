// ½ + ¾ + 5/6 + ... + 2n + 1/ 2n + 2

function S(n) {
    var sum =0;
    for (let i= 1; i<=n; i++){
        sum+= (2*i+1)/(2*i+2);
    }
    console.log("S(n) = " + sum);       
}
S(5);