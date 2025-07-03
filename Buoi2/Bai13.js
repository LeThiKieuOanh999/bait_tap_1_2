//Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15]
var count = 0
for(i=0; i<= arr.length; i++){
    if(arr[i] % 2 ===0)
        count++
}
console.log("SUM ="+ count);
