// workshop4_3.js

// 1. สร้างฟังก์ชันจำลองการทำงานที่รับพารามิเตอร์ timeout
const simulateAsyncOperation = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // เงื่อนไข: ถ้า timeout น้อยกว่า 1000 ให้ reject (แจ้ง Error)
            if (timeout >= 1000) {
                resolve(`ทำงานสำเร็จที่เวลา ${timeout} ms`);
            } else {
                reject(`ข้อผิดพลาด: timeout (${timeout} ms) น้อยกว่าที่กำหนด!`);
            }
        }, timeout);
    });
};

// 2. สร้างฟังก์ชันที่ใช้ async/await และ try/catch
const performAsyncTask = async (timeout) => {
    try {
        console.log(`--- กำลังเริ่มงานด้วยเวลา: ${timeout} ms ---`);
        // รอผลลัพธ์จาก simulateAsyncOperation
        const result = await simulateAsyncOperation(timeout);
        console.log(result);
    } catch (error) {
        // จัดการกับข้อผิดพลาดที่เกิดขึ้น
        console.error(error);
    }
};

// 3. เรียกใช้งานตามโจทย์กำหนด
const runWorkshop = async () => {
    // ครั้งแรก: ให้ timeout เป็น 1500 ms (ควรจะสำเร็จ)
    await performAsyncTask(1500);

    // ครั้งที่สอง: ให้ timeout เป็น 500 ms (ควรจะ Error)
    await performAsyncTask(500);
};

runWorkshop();
