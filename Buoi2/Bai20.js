//Tìm số chẵn cuối cùng trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9].
//  Nếu không tìm được số chẵn nào thì in ra -1
function findLastEven(arr) {
  let result = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] % 2 === 0 && (result = arr[i], i = -1); // nếu là số chẵn, gán và thoát vòng lặp
  }

  return result;
}

let arr = [10, 11, 12, 13, 14, 15];
let arr2 = [1, 3, 5, 7, 9];

console.log(findLastEven(arr));   // 👉 14
console.log(findLastEven(arr2));  // 👉 -1
