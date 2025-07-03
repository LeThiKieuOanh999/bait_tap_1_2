//Viết chương trình in ra tam giác cân có chiều cao = h
var h = 3 
for (var i = 1; i <= h; i++) {
  var space = " ".repeat(h - i);       // khoảng trắng bên trái
  var stars = "*".repeat(2 * i - 1);   // số lượng dấu *
  console.log(space + stars);
}
