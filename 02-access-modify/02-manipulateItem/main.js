// ให้ทำตามขั้นตอนดังนี้
// - สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// - เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
// i

const styles = ['Jazz','Blues'];

// เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
styles.push('Rock-n-Roll');

// แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = 'Classic';

// ลบ element ตัวแรก โดยใช้คำสั่ง delete
delete styles[0];

// จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
const lengthAfterSteps = styles.length;

console.log(styles);
console.log(lengthAfterSteps);

