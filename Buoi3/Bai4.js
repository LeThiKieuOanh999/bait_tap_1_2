//Viết arrow function đảo ngược một chuỗi.


const reverseString = (str) =>{
    var str = "hello world";
    return str.split("").reverse().join("");  // Chia chuỗi thành mảng, đảo ngược mảng và nối lại thành chuỗi
}
console.log("Chuoi sau khi dao nguoc la:"+ " " + reverseString()); 

// split(): Biến chuổi---> mảng
// reverse(): Đảo ngược mảng
// join(): Biến mảng---> chuỗi  
//? tại sao không thể trực tiêp gọi str.reverse() ?
// --->  Vì reverse là phương thức của mảng, không phải của chuỗi.
// --->  Vì chuỗi trong js không có method reverse(), chỉ có mảng mới có.