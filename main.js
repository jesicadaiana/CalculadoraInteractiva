let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

let nro1 =  Number.parseInt("Ingrese un numero")
let nro2 = Number.parseInt("Ingrese un numero") 

function Suma (nro1, nro2) {
    console.log ("La suma es: ", nro1 +  nro2);
}

function calcularIMC (estatura, peso) {
    
}
