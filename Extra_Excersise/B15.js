//Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ..... + 1/ 1 + 2 + 3 + .... + N
// công thức ap dụng: 1+2+3+....+N = (k(k+1))/2
function S(n){
    var sum = 0;
    for(let i = 1; i<= n; i++){
        var tongcuamauso = (i*(i+1))/2
        sum+= 1/tongcuamauso; 
    }
    console.log("S(n) ="+ sum)
}
S(5);