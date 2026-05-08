// Workshop 3.2: คำนวณ BMI โดยใช้ if แยกกันตามสไลด์ตัวอย่างหน้า 29
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category = "";

    // ใช้ if แยกกันทีละเงื่อนไขเหมือนสไลด์หน้า 29
    if (bmi < 18.5) {
        category = "ผอม";
    }
    if (bmi >= 18.5 && bmi < 25) {
        category = "ปกติ";
    }
    if (bmi >= 25 && bmi < 30) {
        category = "อ้วน";
    }
    if (bmi >= 30) {
        category = "อ้วนมาก";
    }

    return {
        bmi: bmi.toFixed(2),
        category: category
    };
}

// ตัวอย่างการใช้งานตามโจทย์
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.60));
console.log(calculateBMI(90, 1.70));
