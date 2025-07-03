//Bài 3: Nhập vào a, b, c. Kiểm tra xem a, b, c có phải là độ dài 3 cạnh của 1 tam giác hay không. 
// Nếu đúng, in ra loại tam giác (vuông, cân, đều, thường)

var a = 3;
var b = 4;
var c = 5;

// Kiểm tra điều kiện tạo thành tam giác
if (a + b > c && a + c > b && b + c > a) {
    console.log("Đây là 3 cạnh của một tam giác.");

    // Kiểm tra loại tam giác
    if (a === b && b === c) {
        console.log("Tam giác đều.");
    } else if (a === b || b === c || a === c) {
        console.log("Tam giác cân.");
    } else if (
        a * a === b * b + c * c ||
        b * b === a * a + c * c ||
        c * c === a * a + b * b
    ) {
        console.log("Tam giác vuông.");
    } else {
        console.log("Tam giác thường.");
    }
} else {
    console.log("Không phải là 3 cạnh của một tam giác.");
}
