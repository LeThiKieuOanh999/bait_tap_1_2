//Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
var arr = [10, 11, 12, 13, 14, 15];
var max = arr[0]; // giả sử phần tử đầu tiên là lớn nhất

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Số lớn nhất là:", max);