// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

function checkEmptyObj(obj) {
    if (typeof obj !== 'object') {
      return false;
    }
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
  
    return true;
  }
  
  const emptyObj = {};
  const nonEmptyObj = { key: 'value' };
  const notAnObj = 'This is not an object';
  
  console.log(checkEmptyObj(emptyObj)); // => true
  console.log(checkEmptyObj(nonEmptyObj)); // => false
  console.log(checkEmptyObj(notAnObj)); // => false
  