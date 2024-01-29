const fehrenheit = document.querySelector("#Fehrenheit");
const kelvin = document.querySelector("#Kelvin");
const result2 = document.querySelector("#result2");
const result1 = document.querySelector("#result1");

function calculate_to_fehrenheit(){
    const kel = kelvin.value;
    let f = (kel - 273.15)*9/5 + 32;

    result1.innerHTML = f.toFixed(2);
    kelvin.value = null;
}

function calculate_to_kelvin(){
    const feh = fehrenheit.value;
    let k = (((feh - 32)*5) / 9 )+ 273.15;
    result2.innerHTML = k.toFixed(2);
    fehrenheit.value = null;
}
