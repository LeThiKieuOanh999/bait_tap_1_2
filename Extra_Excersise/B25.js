// Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
function S(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 0) {
            sum += i;
        }
    }
    console.log("S(n) :" + sum)
};
S(10); 

// Đem tất cả các “ước số chẵn” của số nguyên dương n
function SS(n) {
    var count = 0;
    for(i =1; i<= n; i++){
        if(n % i === 0 && i % 2 === 0){

        count++ ; 
        }
    }
    console.log("Liet ke ước so chăn: " + count);
};
SS(10); 