// จงหา index ใน tasks ที่มี id เท่ากับ 2
// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];
// // expexted result: 1
// ```

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  let targetIndex = -1;
  
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === 2) {
      targetIndex = i;
      break;
    }
  }
  
  console.log(targetIndex); // ผลลัพธ์ควรจะเป็น 1
  