//Giả lập API delay:
function fakeApi(callback) {
  setTimeout(() => {
    callback("Dữ liệu từ server");
  }, 2000);
}
fakeApi((data) => {
  console.log("Nhận dữ liệu: " + data);
});