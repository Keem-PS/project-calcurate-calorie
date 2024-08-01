function calBMR () {
    let gender = document.querySelector('input[name="gender"]:checked').value
    let kg = document.getElementById('kg').value
    let height = document.getElementById('height').value
    let age = document.getElementById('age').value

    let bmr
    if (gender === "male") {
        bmr = 66 + (13.7 * kg) + (5 * height) - (6.8 * age)
    } else {
        bmr = 665 + (9.6 * kg) + (1.8 * height) - (4.7 * age) 
    }
    return bmr.toFixed(0)
}

function displayBMR(bmr) {
    document.getElementById('result-bmr').innerText = bmr
}

function calTDEE () {
    let eventTdee = parseFloat(document.querySelector('input[name="event-tdee"]:checked').value)
    let bmr = calBMR()
    return (bmr * eventTdee).toFixed(0)
}

function displayTDEE(tdee) {
    document.getElementById('result-tdee').innerHTML = tdee
}

function clearForm() {
    // Get all input elements within the form
    const inputs = document.querySelectorAll("input");

    // Loop through each input and clear its value
    inputs.forEach(input => {
        if (input.type === 'radio') {
            input.checked = false; // Uncheck all radio buttons
        }
    });
}

// Ensure the function runs after the page has fully loaded
window.onload = clearForm;




