//Liệt kê tất cả các “ước số” của số nguyên dương n
function lietKeUocSo(n) {
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
           console.log(i)
        }
    }
}
lietKeUocSo(10); 
