//Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
var arr = [10, 11, 12, -10, -11, -12]
var count = 0
for(i=0; i<arr.length; i++){
    if(arr[i]>0)
        count+= arr[i]
}
console.log("SUM ="+ count);
