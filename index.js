let input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
let length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    const value = Number(input.value)

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    forLength(value)
    forVolume(value)
    forMass( value)
    
})

function forLength(input){
   
    let toFeets = Math.round((input * 3.281)*1000)/1000
    let toMeters = Math.round((input / 3.281)*100)/100

   
    length.innerHTML += `<p>${input} meters = ${toFeets} feets | ${input} feet = ${toMeters} meters</p>`
    
}

function forVolume(input){
    let toGallon = Math.round((input * 0.264)*1000)/1000
    let toLiters = Math.round((input / 0.264)*1000)/1000

    return volume.innerHTML += `<p>${input} liters = ${toGallon} gallons | ${input} gallons = ${toLiters} liters</p>`
    
}

function forMass(input){
    let toPounds = Math.round((input * 2.204)*1000)/1000
    let toKilos = Math.round((input / 2.204)*1000)/1000

    return mass.innerHTML += `<p>${input} kilos = ${toPounds} punds | ${input} punds = ${toKilos} kilos</p>`
    
}