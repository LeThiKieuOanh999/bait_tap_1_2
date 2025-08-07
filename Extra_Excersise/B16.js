//Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + ... + x^n/1 + 2 + 3 + .... + N
// 1+2+3+4+..+N = k(k+1)/2
  function S(x, n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        var tongMauSo = (i * (i + 1)) / 2;

        let tuso = 1;
        for (let j = 1; j <= i; j++) {
            tuso *= x;
        }

        sum += tuso / tongMauSo;
    }

    console.log("S(x,n) = " + sum);
}

// Gọi hàm
S(2, 3);