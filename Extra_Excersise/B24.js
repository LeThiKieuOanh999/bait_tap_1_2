//Liệt kê tất cả các “ước số lẻ” của số nguyên dương n
function S(n){
    for(let i=1; i<= n; i++){
        if(n % i === 0 && i % 2 !== 0){
            console.log(i);
        }
    }
}
S(10); 


//Liệt kê tất cả các “ước số chẳn” của số nguyên dương n
function SS(n){
    for (let i=1; i<= n; i++){
        if(n % i === 0 && i % 2=== 0){ 
            console.log(i);
        }
    }
}
SS(10); 