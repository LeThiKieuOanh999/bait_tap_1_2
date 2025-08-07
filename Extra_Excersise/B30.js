//Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
function isPerfectnumber(n){
    var sum = 0;
    for(let i=1; i<= n; i++){
        if(n % i === 0 && i < n){
            sum+= i;
        }
    }
    if (sum===n){
        console.log(n + " là số hoàn thiện")
    }else{
        console.log(n + " không phải sô hoàn thiện")
    }
};
isPerfectnumber(6);

