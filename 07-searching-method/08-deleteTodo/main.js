// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)
// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function deleteTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1); 
      break;
    }
  }
}

deleteTask(1);
console.log(tasks);