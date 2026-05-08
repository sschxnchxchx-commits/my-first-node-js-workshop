// Workshop 1.2: การประกาศตัวแปรที่มีประเภทข้อมูลต่างกัน 5 ชนิด
// และใช้คำสั่ง typeof เพื่อตรวจสอบและแสดงชนิดของข้อมูลแต่ละตัวแปรออกทาง Console

//ข้อมูลประเภทข้อความ(ต้องอยู่ในเครื่องหมาย " ")
let myString = "Hello World";

//ข้อมูลประเภทตัวเลข (ใช้คำนวณได้)
let myNumber = 42;                        
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;

console.log("myString: " + myString + " - Type: " + typeof myString);
console.log("myNumber: " + myNumber + " - Type: " + typeof myNumber);
console.log("myBoolean: " + myBoolean + " - Type: " + typeof myBoolean);
console.log("myNull: " + myNull + " - Type: " + typeof myNull);
console.log("myUndefined: " + myUndefined + " - Type: " + typeof myUndefined);
