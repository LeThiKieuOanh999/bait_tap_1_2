//Viết hàm greet(name, callback) để in Xin chào <name> rồi gọi callback:
function hihi(name, callback) {
    console.log("Xin chào " + name);
    callback();
}

hihi("Oanh", () => {
    console.log("Đã gọi callback sau khi in tên");
});