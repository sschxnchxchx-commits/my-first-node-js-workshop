// โค้ดส่วนนี้คือ "ตัวเรียกใช้งาน" (ให้ใส่ในไฟล์อื่น เช่น index.js)
const operation = require('./operation'); 

console.log(operation('add', 4, 5));       // รันแล้วได้ 9
console.log(operation('subtract', 10, 3));  // รันแล้วได้ 7
console.log(operation('multiply', 5, 6));  // รันแล้วได้ 30
console.log(operation('divide', 8, 2));    // รันแล้วได้ 4
