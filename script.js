// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || '0';
    } catch {
        display.value = 'Error';
    }
}
