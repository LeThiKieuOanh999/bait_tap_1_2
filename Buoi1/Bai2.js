// Bài 2: Nhập 3 số a, b, c. Giải phương trình ax^2 + bx + c = 0
var a = 1;
var b = 3;
var c = 5;
var phuong_trinh = b * b - 4 * a * c;

if (a === 0) {
    console.log("Đây không phải phương trình bậc hai.");
} else if (phuong_trinh < 0) {
    console.log("Phương trình vô nghiệm.");
} else if (phuong_trinh === 0) {
    var x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép: x =", x);
} else {
    var x1 = (-b + Math.sqrt(phuong_trinh)) / (2 * a);
    var x2 = (-b - Math.sqrt(phuong_trinh)) / (2 * a);
    console.log("Phương trình có hai nghiệm:");
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}
