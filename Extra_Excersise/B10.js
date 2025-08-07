//Tính T(x, n) = x^n
function T(x,n){
    var result = 1;
    for (let i=0;i<=n;i++){
        result*=x;
    }
    console.log("T(" + x + ", " + n + " ) = " + result);
}
T(2, 5);