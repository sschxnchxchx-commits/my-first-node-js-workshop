// operation.js 
const operation = (type, a, b) => {
    if (type === 'add') return a + b;
    else if (type === 'subtract') return a - b;
    else if (type === 'multiply') return a * b;
    else if (type === 'divide') return a / b;
    else return 'Invalid operation type';
};

// ส่งออกฟังก์ชันเพียงฟังก์ชันเดียวตามเงื่อนไขโจทย์
module.exports = operation;

