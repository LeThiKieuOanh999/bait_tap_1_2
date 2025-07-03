//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 + ... + n^2
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i * i; 
}

console.log("Tổng = " + sum);