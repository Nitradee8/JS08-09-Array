//จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str
// let str = 'I live in Thailand'; // 18
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}


let str = 'I live in Thailand';
const charCount = {};

for (let char of str.toLowerCase()) {
    if (char !== ' ') {
        charCount[char] = (charCount[char] || 0) + 1;
    }
}

console.log(charCount);
