//Tạo một array các object user, lọc ra những user có tuổi > 18.
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 15 }
]
const adult = users
    .filter(function (user) {
        return user.age > 18
    })
    .map(function (user) {
        return user.name
    });
console.log("Những người dùng trên 18 tuổi là: " + adult);
