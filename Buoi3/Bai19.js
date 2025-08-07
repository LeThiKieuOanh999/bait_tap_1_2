//Viết một Promise bị reject, dùng .catch() để bắt lỗi và in thông báo.
const success = 0; // Thay đổi thành true để thử trường hợp thành công
const errorPromise = new Promise((resolve, reject) => {    
   if(success){
         resolve("Thành công!");
   } else {
         reject("Đã xảy ra lỗi!");          
   }
});

errorPromise
.then(result => {
    console.log("Kết quả: " + result);
})
.catch(error => {
    console.log("Lỗi: " + error);   
}); 
