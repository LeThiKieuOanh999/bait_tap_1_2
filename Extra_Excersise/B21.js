//Tính tổng tất cả các “ ước số” của số nguyên dương n
function S(n){
    var sum =0
    for(let i= 1; i<= n; i++){
        if( n % i === 0){
            sum+= i ;
        }
    }
    console.log("S(n)= :"+ sum )
}
S(10)