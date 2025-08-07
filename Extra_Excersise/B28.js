//Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó
function S(n){
    var sum = 0;
    for(let i =1; i<= n; i++){
        if( n % i === 0 && i < n){
            console.log(i)
            sum+= i 
        }
    }
    console.log("S(n) = "+ sum)
};

S(20); 