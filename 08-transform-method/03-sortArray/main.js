// จงเรียงข้อมูลใน arr จากมากไปหาน้อย

// const arr = [11, 17, 23, 13, 7, 19];

const arr = [11, 17, 23, 13, 7, 19];
arr.sort( (a,b) => {
    if(a < b) return 1
    else return -1
}) // => [ 23, 19, 17, 13, 11, 7 ]



//------------------------------------------------------
// ตย.
// const arr = [1, 2, 15];
// arr.sort() //1,15,2

// Min=>Max
// arr.sort( (a,b) => {
//     // console.log(a,b)
//     // return Positive == SWITCH
//     // return Zero,Negetive === Don't Switch
    
//     if(a > b) return 1
//     else return -1
// })
// arr.sort((a,b)=> a-b)


// Max=>Min
// arr.sort((a,b)=> b-a) //แบบสั้น เอาตัวมากไว้หลัง ได้ [15, 2, 1]
// arr.sort( (a,b) => {
//     if(a < b) return 1
//     else return -1
// })
