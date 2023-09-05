// - จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// - ตัวอย่างผลลัพธ์
// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)


function copySorted(arr) {
    const copiedArr = [...arr];
    copiedArr.sort();
  
    return copiedArr;
  }
  
  let arr = ['React', 'Vue', 'Angular'];
  let sorted = copySorted(arr);
  
  console.log(sorted); // ['Angular', 'React', 'Vue']
  console.log(arr); // ['React', 'Vue', 'Angular'] (ไม่มีการเปลี่ยนแปลงใน arr ต้นฉบับ)
  