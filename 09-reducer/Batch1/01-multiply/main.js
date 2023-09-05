// จงหาผลคูณของ element ใน nums

const nums = [-3, 2, 11, -7, 4, 6];
let product = 1;

for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
}

console.log(product); // ผลลัพธ์: -1008
