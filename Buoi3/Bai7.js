//Dùng forEach để tính tổng các số trong mảng [1, 2, 3, 4, 5].
var arr = [1, 2, 3, 4, 5];
var sum = 0
arr.forEach(function (number) {
    return sum += number; // Cộng từng số vào biến sum
}
);
console.log("Tổng các số trong mảng là: " + sum);



