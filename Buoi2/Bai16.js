//Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15]
var min = arr[0]
for(i= 0; i< arr.length; i++){
    if (arr[i]< min){
        min = arr[i]
    }
}
console.log(" min :" + min);
