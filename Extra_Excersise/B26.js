//Tính tích tất cả các “ước số lẻ” của số nguyên dương n
function S(n){
    var sum = 1;
    for(let i=1; i<= n; i++){
        if(n % i ===0 && i % 2 !== 0){
            sum*= i ; 
        }
    }
    console.log("S(n)= "+ sum )
};
S(10); 