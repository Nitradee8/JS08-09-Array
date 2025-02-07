// จงเขียนฟังก์ชัน filterRange(arr, a, b)
// เพื่อ return array ที่ประกอบด้วย element ของ arr
// ที่มีค่าอยู่ระหว่าง a กับ b

const nums = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
// filterRange(arr,4,8) => [4,5,6,7,8]

function filterRange(arr, lower, upper) {
    return arr.filter((n, idx) => n >= lower && n <= upper);
}

filterRange(nums, 4, 8);