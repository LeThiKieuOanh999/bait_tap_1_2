//Dùng map để nhân đôi mỗi phần tử trong mảng [1, 2, 3]
const number = [1, 2, 3];
const result =number.map(function (num1) { 
    return num1 * 2; // Nhân đôi mỗi phần tử
});
console.log("Mang sau khi nhan doi la: " + result)