//Dùng filter để lọc ra các số chẵn từ mảng [1, 2, 3, 4, 5, 6].
const number = [1, 2, 3, 4, 5, 6];
const evenNumber = number.filter(function(num){
    return num % 2 === 0; // Lọc ra các số chẵn
}); // [2, 4]
console.log("Cac so chan trong mang la: " + evenNumber);
