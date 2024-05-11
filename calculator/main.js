'use strict';

console.log('sono la calcolatrice');

// - MILESTONE 1 ***********************************
// numeri
const numberButtons = document.querySelectorAll('.number-button');
console.log(numberButtons);

// creo variabile display
let displayResult = document.getElementById('result');
// creo variabili di di reset per operando1 operando2 e operatore
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';
let resultObtained = false;

// ciclo for 
for (let i = 0; i < numberButtons.length; i++){
        numberButtons[i].addEventListener('click', function() {
        let value = numberButtons[i].innerHTML;
        console.log('ho cliccato', value);
        if (resultObtained) {
            displayResult.innerHTML = value;
            resultObtained = false; // Resetta il flag
        } else {
            displayResult.innerHTML += value;
        }
    });
};

// - MILESTONE 2 ***********************************
// operatori
const operatorButtons = document.querySelectorAll('.operator');
console.log(operatorButtons);

// ciclo for
for (let i = 0; i < operatorButtons.length; i++)  {
        operatorButtons[i].addEventListener('click', function() {
        operator = operatorButtons[i].innerHTML;
        firstOperand = displayResult.innerHTML;
        // resetto numero su display
        displayResult.innerHTML = '';

        // salvo operazione
        console.log("Primo operando:", firstOperand);
        console.log('ho cliccato segno', operator);
    });
};

// - MILESTONE 3 ***********************************
// segno uguale(=)

const equalButton = document.querySelector('.uguale');
console.log(equalButton);

equalButton.addEventListener('click', function() {
    secondOperand = displayResult.innerHTML;
    console.log("Secondo operando:", secondOperand);
    console.log('ho cliccato =');
    
    // Controllo se entrambi gli operandi sono presenti
    if (firstOperand !== '' && secondOperand !== '' && operator !== '') {
        // Eseguo l'operazione corrispondente all'operatore
       
        switch (operator) {
            case '+':
                result = parseInt(firstOperand) + parseInt(secondOperand);
                break;
            case '-':
                result = parseInt(firstOperand) - parseInt(secondOperand);
                break;
            case '*':
                result = parseInt(firstOperand) * parseInt(secondOperand);
                break;
            case '/':
                result = parseInt(firstOperand) / parseInt(secondOperand);
                break;
            default:
                result = 'Errore';
                break;
        }

        // Stampo il risultato sul display
        displayResult.innerHTML = result;
        console.log('il risultato è:', result);


        // Resetto i valori di firstOperand, secondOperand e operator
        firstOperand = '';
        secondOperand = '';
        operator = '';
        resultObtained = true;
    } else {
        // operandi non presenti
        console.log('Operandi insufficienti');
    }
});

// - MILESTONE 4 ***********************************
// tasto cancel
const cancelButton = document.querySelector('.cancel');
console.log(cancelButton);

cancelButton.addEventListener('click', function() {
    displayResult.innerHTML = '';
    console.log('ho cliccato cancel');
});
