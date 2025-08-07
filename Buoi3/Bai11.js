//Tạo object đại diện cho người dùng { name: 'Alice', age: 25 }, viết hàm in ra tên người đó.
const user = {
    name: "Alice",
    age: 25
}
function Print(user) {
    console.log("Tên người dùng là: " + user.name + " và tuổi là: " + user.age);
}
Print(user);