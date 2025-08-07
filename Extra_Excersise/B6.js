//Tính S(n) = 1/1x2 + 1/2x3 +...+ 1/n x (n + 1)

function S(n){
    var sum = 0;
    for (let i = 1; i<= n; i++){
        sum += 1/(i*(i+1));
    }
    console.log("S(n) = " + sum);
}
S(5);