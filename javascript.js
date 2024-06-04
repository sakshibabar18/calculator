document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.id;
            if (id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.innerText = '0';
            } else if (id === 'backspace') {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || '0';
            } else if (id === 'equals') {
                if (operator && previousInput && currentInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = null;
                }
            } else if (this.classList.contains('operator')) {
                if (currentInput) {
                    if (operator && previousInput) {
                        currentInput = calculate(previousInput, currentInput, operator);
                        display.innerText = currentInput;
                    }
                    operator = id;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += id;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            default:
                return num2;
        }
    }
});
