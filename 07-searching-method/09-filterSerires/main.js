// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10

// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่

// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// const array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 },
// ];
// // อายุไม่น้อยกว่า 18 

// const array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' },
// ];
// // id ไม่เท่ากับ 4

// const array = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' },
// ];
// // เกิดเดือน 6

//------------------------------------------------------
const log = console.log;

// const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10

// const newArray = array.filter(function (num) {
//     // if (num > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // if (num > 10) return true;
//     // return false;

//     // return num > 10 ? true : false;
//     return num > 10;
// });

// const newArray = array.filter((n) => n > 10);
// log(newArray);

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E

// const filteredArr = array.filter((animal) => animal[0].toLowerCase() === 'e');
// log(filteredArr);

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

// Boolean Expression => Solve to Boolean
// "APPLE".toUpperCase() === "APPLE" => true
// "oRangGE".toUpperCase() === "oRanGE" => false

// const filteredArr = array.filter((word) => word.toUpperCase() === word);
// log(filteredArr);

// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' },
// ];

// Deleted by Array.filter
// const filterLists = array.filter((obj) => obj.id != 4);
// log(filterLists);

const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' },
];

function filterFn(personObj, index, array) {
    const month = +personObj.birth.slice(5, 7);
    if (month === 6) return true;
    else return false;
}

const filterLists = array.filter(filterFn);

log(filterLists);
