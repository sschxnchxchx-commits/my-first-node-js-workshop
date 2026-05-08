// workshop4_2.js

// --- ส่วนของ Callback ---
// สร้างฟังก์ชันจำลองการดึงข้อมูล 2 วินาที โดยใช้ Callback
const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        const data = "ข้อมูลจาก Callback สำเร็จแล้ว!";
        callback(data); // ส่งข้อมูลกลับผ่าน callback
    }, 2000);
};

// --- ส่วนของ Promise ---
// สร้างฟังก์ชันจำลองการดึงข้อมูล 2 วินาที โดยคืนค่าเป็น Promise
const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve("ข้อมูลจาก Promise สำเร็จแล้ว!"); // ถ้าสำเร็จใช้ resolve
            } else {
                reject("เกิดข้อผิดพลาดในการดึงข้อมูล!"); // ถ้าพังใช้ reject
            }
        }, 2000);
    });
};

// --- การเรียกใช้งานตามโจทย์ ---

// 1. เรียกใช้แบบ Callback
console.log("เริ่มดึงข้อมูลแบบ Callback...");
fetchDataWithCallback((result) => {
    console.log(result);
});

// 2. เรียกใช้แบบ Promise (.then และ .catch)
console.log("เริ่มดึงข้อมูลแบบ Promise...");
fetchDataWithPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
