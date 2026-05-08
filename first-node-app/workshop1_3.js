// Workshop 1.3: คำนวณคะแนนสอบ 3 วิชา
// หาคะแนนรวม ค่าเฉลี่ย และเช็กเงื่อนไขผ่านเกณฑ์ (80 คะแนน)หรือไม่

let math = 85;
let science = 72;
let english = 90;

// คำนวณคะแนนรวม
let total = math + science + english;

//คำนวณค่าเฉลี่ย
let average = total / 3;

//แสดงผลลัพธ์
console.log("คะแนนรวม: " + total);
console.log("คะแนนเฉลี่ย: " + average);

//ตรวจสอบเงื่อนไข (มากกว่าหรือเท่ากับ 80 หรือไม่)
console.log("คะแนนเฉลี่ย >= 80: " + (average >= 80));
