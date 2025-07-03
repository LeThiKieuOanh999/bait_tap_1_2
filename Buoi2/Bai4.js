//Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
var n= 5
var sum= 0
for( i=1 ; i<=n ; i++){
    sum+= i*i*i
}
console.log ("Tổng = "+ sum)