// - จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
// - ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
// - ให้เพิ่ม Horse เข้าไปข้างหน้า animals
// - ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
// - ให้เอา Horse ออกจาก animals
// - ให้เอา Snake ออกจาก animals
// - ให้เอา Dog ออกจาก animals
// - ผลลัพธ์สุดท้ายของ animals คืออะไร

// const animals = ['Spider', 'Cat', 'Elephant'];

// // Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// // Mutable : เปลี่ยนแปลงค่าได้

// // Method Push ทำให้ Array Mutate ไหม ? Yes (ยาวขึ้น)
// // Method Push return อะไรกลับมา
// let r = animals.push('Dog');
// // log(animals);
// // log(r); // 4

// let s = animals.unshift('Snake', 'Mountain Bird');
// // log(animals);
// // log(s); // 6

// let t = animals.pop();
// // log(animals);
// // log(t); // Dog

const animals = ['Dog', 'Cat', 'Rat'];
    animals.push('Fish');
    animals.unshift('Horse');
    animals.push('Giraffe', 'Snake');
    animals.shift();
    animals.pop();
    animals.splice(animals.indexOf('Dog'), 1);

console.log(animals); // => ['Cat', 'Rat', 'Fish', 'Giraffe']
