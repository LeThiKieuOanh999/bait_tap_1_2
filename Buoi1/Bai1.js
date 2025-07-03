// Bài 1: Nhập 2 số a, b. Giải phương trình ax + b = 0
var a = 2;
var b = 3;
if (a === 0) {
    if (b === 0) {
        console.log("Phương trình có vô số nghiệm.");
    } else {
        console.log("Phương trình vô nghiệm.");
    }
} else {
       var x = -b / a;
    console.log("Nghiệm của phương trình là x =", x);
}