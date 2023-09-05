// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน
// ```js
// const persons = [
//   { name: 'John', sex: 'M' },
//   { name: 'Jody', sex: 'M' },
//   { name: 'Susan', sex: 'F' },
//   { name: 'Kate', sex: 'F' },
//   { name: 'Sid', sex: 'M' }
// ];
// // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }


const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  const groupedPersons = {};
  
  for (const person of persons) {
    if (!groupedPersons[person.sex]) {
        groupedPersons[person.sex] = [];
    }
        groupedPersons[person.sex].push(person.name);
  }
  
  console.log(groupedPersons);
  
