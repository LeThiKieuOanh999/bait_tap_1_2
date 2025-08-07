//Tính S(n) = ½ + 2/3 + ¾ + .... + n / n + 1
function S(n) {
    var sum =0;
    for (let i=1; i <= n; i++){
        sum+=i/(i+1);
    }
    console.log("S(n) = " + sum);           
}
S(5);