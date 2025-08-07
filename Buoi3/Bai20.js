// Viết hàm async gọi một Promise giả lập API:

function fakeApiPromise(success= true) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (success) {
        resolve("Kết quả từ sever")
      } else {
        reject("Đâ xảy ra lỗi")

      }
    }, 2000);
  });
}

async function getData() {
  await fakeApiPromise()
    .then((data) => {
      console.log("Nhận dữ liệu: " + data);
    })
    .catch((error) => {
      console.error("Lỗi khi nhận dữ liệu: " + error);
    });
  console.log("Đã hoàn thành việc lấy dữ liệu.");
}

getData();