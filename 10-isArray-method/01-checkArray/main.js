// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 

function isArray(input) {
    return Array.isArray(input)
}

console.log(isArray([]));           // true
console.log(isArray([1, 2, 3]));    // true
console.log(isArray({}));           // false
console.log(isArray("string"));     // false
console.log(isArray(123));          // false