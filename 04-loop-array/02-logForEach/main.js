// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง

const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

['Mike', 'Sid', 'Jack', 'Bill'].forEach( (a, b, c, d)=>console.log(a) )


// วิธีที่ 1
// names.fotEach((person)=> console.log(person));

// วิธีที่ 2 Callback : Literal,On the fly
// names.fotEach((person, order)=> console.log(person + 1, order));

// วิธีที่ 3
// function log.Person(person, order) {
//      console.log(order + 1, person)
// }
// 
// names.forEach(logPerson)

//---------------------------------------------------------------------------
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];

// function logPerson(person, order) {
//     console.log(order + 1, person);
// }

// // Callback : Literal,On the fly
// names.forEach((person, order) => console.log(order + 1, person));

// // Callback : Named, Reference
// names.forEach(logPerson);

// // logPerson('pavit', 99);
// // names.forEach(5);