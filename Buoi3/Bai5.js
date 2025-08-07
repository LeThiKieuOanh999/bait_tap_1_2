//Viết function truyền vào số giây, in ra "Đã hết thời gian" sau số giây đó.

// Hàm countdown sử dụng setTimeout để đếm ngược thời gian
function countdown() {
    var seconds = 5;
    setTimeout(() => {
        console.log("Đã hết thời gian") // Chuyển giây sang mili giây
    }, seconds * 1000);
}
countdown();

// cau truc của hàm setTimeout:
// setTimeout(function, milliseconds)
// function: Hàm sẽ được gọi sau khoảng thời gian đã chỉ định.
// milliseconds: Khoảng thời gian (tính bằng mili giây) trước khi hàm được gọi.