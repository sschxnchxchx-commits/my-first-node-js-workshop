// workshop4_4.js

// --- 1. สร้างฟังก์ชันจำลองการดึงข้อมูลจาก 3 เซิร์ฟเวอร์ ---

const fetchDataFromServer1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ข้อมูลจาก Server 1 (2 วินาที)"), 2000);
    });
};

const fetchDataFromServer2 = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Error: Server 2 ล้มเหลว! (1 วินาที)"), 1000);
    });
};

const fetchDataFromServer3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ข้อมูลจาก Server 3 (3 วินาที)"), 3000);
    });
};

// --- 2. จัดการตามสถานการณ์ที่โจทย์กำหนด ---

const runWorkshops = async () => {
    
    // กรณีที่ 1: ต้องการตัวแรกที่ตอบสนองสำเร็จ (ใช้ Promise.any)
    console.log("--- กรณีที่ 1: รอตัวแรกที่สำเร็จ ---");
    try {
        const firstSuccess = await Promise.any([
            fetchDataFromServer1(),
            fetchDataFromServer2(),
            fetchDataFromServer3()
        ]);
        console.log("ตัวแรกที่สำเร็จคือ:", firstSuccess);
    } catch (error) {
        console.error("ไม่มีตัวไหนสำเร็จเลย");
    }

    console.log("\n--------------------------\n");

    // กรณีที่ 2: จัดการผลลัพธ์ทั้งหมดรวมถึงข้อผิดพลาด (ใช้ Promise.allSettled)
    console.log("--- กรณีที่ 2: ดูผลลัพธ์ทั้งหมดจากทุก Server ---");
    const allResults = await Promise.allSettled([
        fetchDataFromServer1(),
        fetchDataFromServer2(),
        fetchDataFromServer3()
    ]);
    console.log(allResults);
};

runWorkshops();
