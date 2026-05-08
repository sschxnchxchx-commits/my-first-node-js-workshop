// operation.js

/**
 * ฟังก์ชัน operation รับพารามิเตอร์ 3 ตัว:
 * 1. type : ประเภทการคำนวณ (add, subtract, multiply, divide)
 * 2. a : ตัวเลขตัวแรก
 * 3. b : ตัวเลขตัวที่สอง
 */
const operation = (type, a, b) => {
    // ใช้ if, else if และ else ในการตัดสินใจประเภทของการคำนวณตามโจทย์
    
    if (type === 'add') {
        // ถ้า type เป็น 'add' ให้คืนค่าเป็นผลบวก
        return a + b;
    } 
    else if (type === 'subtract') {
        // ถ้า type เป็น 'subtract' ให้คืนค่าเป็นผลลบ
        return a - b;
    } 
    else if (type === 'multiply') {
        // ถ้า type เป็น 'multiply' ให้คืนค่าเป็นผลคูณ
        return a * b;
    } 
    else if (type === 'divide') {
        // ถ้า type เป็น 'divide' ให้คืนค่าเป็นผลหาร
        return a / b;
    } 
    else {
        // หาก type ไม่ตรงกับที่กำหนด
        return 'Invalid operation type';
    }
};

// ใช้ module.exports เพื่อส่งออกฟังก์ชัน operation (หัวใจสำคัญของเรื่อง Module)
module.exports = operation;

