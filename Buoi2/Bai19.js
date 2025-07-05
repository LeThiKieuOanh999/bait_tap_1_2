//Tìm số chẵn đầu tiên trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. 
// Nếu không tìm được số chẵn nào thì in ra -1
function findLastEven(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return -1;
}
var arr = [10, 11, 12, 13, 14, 15];
var arr2 = [1, 3, 5, 7, 9];

console.log("Số chẵn đầu tiên trong arr:", findLastEven(arr));   // 👉 14
console.log("Số chẵn đầu tiên trong arr2:", findLastEven(arr2)); // 👉 -1