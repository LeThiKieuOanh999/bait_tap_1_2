//Viết arrow function kiểm tra xem số truyền vào có phải là số chẵn không.
// const tenHam = (thamso) => { Logic ben trong }


function isEven(num) {
  return num % 2 === 0;
}

let num = 6;

if (isEven(num)) {
  console.log("Số " + num + " là số chẵn");
} else {
  console.log("Số " + num + " không là số chẵn");
}