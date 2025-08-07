// Đếm số lượng “ước số” của số nguyên dương n
function S(n){
    var count = 0
    for(let i= 1; i<= n; i++){
        if(n % i ===0){
            count++ ; 
        }
    }
console.log("S(n)= :"+ count)
}
S(10)