let input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
let length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");


convertBtn.addEventListener("click", function () {
    const value = Number(input.value);

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number!");
        return;
    }

clearResults()
  
    convertUnits(value, 3.281, "meters", "feet", length);
    convertUnits(value, 0.264, "liters", "gallons", volume);
    convertUnits(value, 2.204, "kilos", "pounds", mass);
});


function convertUnits(value, rate, unit1, unit2, outputElement) {
    let toUnit2 = Math.round(value * rate * 1000) / 1000;
    let toUnit1 = Math.round((value / rate) * 1000) / 1000;

    outputElement.innerHTML += `<p>${value} ${unit1} = ${toUnit2} ${unit2} | ${value} ${unit2} = ${toUnit1} ${unit1}</p>`;
}

function clearResults() {
    length.querySelectorAll("p").forEach(p => p.remove());
    volume.querySelectorAll("p").forEach(p => p.remove());
    mass.querySelectorAll("p").forEach(p => p.remove());
}
