//Tính S(n) = 1 + ½ + 1/3 + ... + 1/n
 var n = 4
 var sum = 0
 function S(n) {
    for (let i = 1; i <= n; i++){
        sum += 1/i;
    }
     console.log("S(n) = " + sum);
 }
S(n);