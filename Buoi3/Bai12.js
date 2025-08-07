//Viết function truyền vào object user, trả về tuổi + 1.
const user = {
    name: "Alice",
    age: 25
}
function incrementAge(user) {
    return user.age + 1
};
console.log("Tuoi cua nguoi dung sau khi tang 1 la: " + incrementAge(user));
