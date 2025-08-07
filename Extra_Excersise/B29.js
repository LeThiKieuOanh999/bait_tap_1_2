// Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
function S(n){
    for (let i = n; i>= 1; i--){ // duyệt ngược bảng 
    if( n % i === 0 && i % 2 !== 0 ){
        console.log(" Số lẻ lớn nhất là : ", i)
        return;
    }
    }
}; 
S(100);