// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

const numbers = [];
let input = prompt("กรอกตัวเลข:");

while (input !== null && !isNaN(input)) {
  numbers.push(Number(input));
  input = prompt("กรอกตัวเลขเพิ่มเติม (หรือกด cancel เพื่อหยุด):");
}

let sum = 0;
for (const number of numbers) {
  sum += number;
}

console.log("ตัวเลขที่กรอก:", numbers);
console.log("ผลรวมของตัวเลข:", sum);
