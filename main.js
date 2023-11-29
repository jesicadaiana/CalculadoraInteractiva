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



function calcularIMC() {
    let estatura = document.getElementById("buttonPrimerNro").value;
    let peso = document.getElementById("buttonSegundoNro").value;
        if (estatura && peso) {     // Verifica que ambos campos tengan valores
            let imc = peso / (estatura * estatura);
            document.getElementById("resultado_imc").innerText = imc.toFixed(1);
            console.log("El IMC es: " + imc.toFixed(1));
        } else {
            alert("Por favor, complete ambos campos.");
        }
}