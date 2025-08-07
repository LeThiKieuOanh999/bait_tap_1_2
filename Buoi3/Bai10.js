//Dùng reduce để tính tổng các phần tử trong mảng [1, 2, 3, 4].
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, num) {
    return accumulator + num;
}, 0)
console.log("Tong cac phan tu trong mang la: " + sum);
// cấu trúc của hàm reduce:
// array.reduce((accumulator, currentValue) => { /* logic */ }, initialValue);
// Trong đó:
//  + accumulator là giá trị tích lũy (tổng) qua các lần lặp,
//  + currentValue là giá trị của phần tử hiện tại trong mảng,
//  +initialValue là giá trị khởi tạo cho accumulator (nếu không có, sẽ lấy phần tử đầu tiên của mảng làm initialValue).