//Tạo Promise trả về "Thành công!" sau 2 giây, dùng .then() để in ra:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Thành công!");
  }, 2000);
});

promise.then(result => {
  console.log(result);
});

// Cấu trúc của Promise:
// new Promise((resolve, reject) => {
//   // Thực hiện một công việc bất đồng bộ
//   // Nếu thành công, gọi resolve(value)
//   // Nếu thất bại, gọi reject(error)
// });
