//Tính T(n) = 1 x 2 x 3...x N
function T(n){
    var product = 1;
    for(let i=1; i<= n; i++){
        product *= i;
    }
    console.log("T(n) = " + product);
}
T(5);