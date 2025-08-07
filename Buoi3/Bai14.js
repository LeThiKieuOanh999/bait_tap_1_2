//Viết function kiểm tra object có chứa key "email" hay không.
const user = {
    name: "Alice",
    age: 25,
    address: {
        city: "Can Tho",
        zip: 7000
    }
}
function hasEmail(user) {
    if (user.hasOwnProperty('email')) {
        return true; // Object có chứa key "email"
    }
    else {
        return false; // Object không chứa key "email"
    }
}

hasEmail(user) ? console.log(user.name + " co chứa email") : console.log(user.name + " Không chứa email");