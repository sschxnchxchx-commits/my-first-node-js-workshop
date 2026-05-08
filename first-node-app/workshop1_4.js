// Workshop 1.4: ระบบตรวจสอบสิทธิ์เข้าใช้งาน
// ตรวจสอบ username, password และอายุตามเงื่อนไขที่กำหนด
let username = "admin", password = "1234", age = 20;

if (username === "admin" && password === "1234" && age >= 18) {
    console.log("เข้าสู่ระบบสำเร็จ");
} else if (username !== "admin" || password !== "1234") {
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
} else if (age < 18) {
    console.log("อายุไม่ถึงเกณฑ์");
}
