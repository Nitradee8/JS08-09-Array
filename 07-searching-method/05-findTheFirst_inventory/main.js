// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries
// ```js
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// ```

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];
  
  let targetItem = null;
  
  for (const item of inventory) {
    if (item.name === 'cherries') {
        targetItem = item;
        break; 
    }
  }
  
  console.log(targetItem); // => { name: 'cherries', quantity: 5 }
  