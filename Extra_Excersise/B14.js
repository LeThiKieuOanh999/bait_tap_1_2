//Tính S(n) = x + x^3 + x^5 + ... + x^2n + 1
function S(x,n){
    var sum = 0;
    for(let i= 1; i<= n; i++){
        var power= 1;
        for (j= 1; j<= (2*i + 1); j++){
            power+=x;
        }
        sum+=power;
    }
    console.log("S(x,n)= "+ sum)
};
S(2,2);