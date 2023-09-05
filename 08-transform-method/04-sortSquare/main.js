// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
// ```js
// const arr = [-3, 2, 0, -7, 4, 6];
// ```

const arr = [-3, 2, 0, -7, 4, 6];
arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));

console.log(arr); // => [0, 2, -3, 4, -7, 6]
