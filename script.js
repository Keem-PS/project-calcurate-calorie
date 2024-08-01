// ฟังก์ชั่น สำหรับคำนวณค่า BMR
function calBMR () {

    //กำหนดตัวแปรในการรับค่าจาก tag input ต่างๆ
    let gender = document.querySelector('input[name="gender"]:checked').value
    let kg = document.getElementById('kg').value
    let height = document.getElementById('height').value
    let age = document.getElementById('age').value

    // กำหนดตัวแปร bmr เพื่อเก็บค่าที่คำนวณเอาไว้
    let bmr
    if (gender === "male") {
        bmr = 66 + (13.7 * kg) + (5 * height) - (6.8 * age)
    } else {
        bmr = 665 + (9.6 * kg) + (1.8 * height) - (4.7 * age) 
    }

    //return ค่า bmr มาเก็บไว้ใน func calBMR เพื่อนำไปแสดงผลต่อ
    return bmr.toFixed(0)
}

//ฟังชั่นแสดงผลของการคำนวณค่า BMR
function displayBMR(bmr) {
    document.getElementById('result-bmr').innerText = bmr
}

//ฟังก์ชั่นคำนวณค่าของ TDEE
function calTDEE () {
    //กำหนดตัวแปร ในการรับค่าของ value ใน tage input type: radio มาเก็บไว้ ซึ่งเป็น type string เลยแปลงค่าเป็น float เพื่อเก็บเป็นค่า ทศนิยม
    let eventTdee = parseFloat(document.querySelector('input[name="event-tdee"]:checked').value)

    // กำหนดตัวแปร bmr เพื่อรับค่า func calBMR เพื่อคำนวณต่อ
    let bmr = calBMR()
    
    //return เพื่อเก็บค่าไว้ใน calTDEE
    return (bmr * eventTdee).toFixed(0)
}

//ฟังก์ชั่นแสดงผลของ tdee
function displayTDEE(tdee) {
    document.getElementById('result-tdee').innerHTML = tdee
}

//ฟังก์ชั่นสำหรับเคลียร์ค่า input ทั้งหมด
function clearForm() {
    //รับค่าที่เป็น tag input ทั้งหมดมาเก็บไว้ในตัวแปร inputs
    let inputs = document.querySelectorAll("input");

    //ลูปการทำงาน
    inputs.forEach(input => {
        if (input.type === 'radio') {
            input.checked = false;
        }
    });
}

window.onload = clearForm;




