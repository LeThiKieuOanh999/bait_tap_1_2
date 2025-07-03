//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
var n = 5; 
let sum = 0;

for (var i = 1; i <= n; i++) {
    sum += 1 / i;
}

console.log("Tổng = " + sum);