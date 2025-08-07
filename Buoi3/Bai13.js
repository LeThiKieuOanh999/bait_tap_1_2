//Tạo object lồng nhau và in ra city:
const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "Can tho",
        zip: 7000
    }
}
function printCity(user) {
    console.log("Thành phố của người dùng là: " + user.address.city);
}
printCity(user);