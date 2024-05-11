'use strict';

console.log('sono la calcolatrice');

// numeri
const numberButton = document.querySelectorAll('.number-button');
console.log(numberButton);

// creo variabile display
let displayResult = document.getElementById('result');


// ciclo for 
for (let i = 0; i < numberButton.length; i++) {
    
    numberButton[i].addEventListener ('click', function() {
    let valore = numberButton[i].innerHTML;
    console.log('ho cliccato', valore);
    displayResult.innerHTML += valore;
  

});
}



// operatori
const operatorButton = document.querySelectorAll('.operator');
console.log(operatorButton);


// ciclo for
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener ('click', function() {
    const operator = operatorButton[i].innerHTML;
    console.log('ho cliccato', operator);

    // creo variabile operando1
    const firstOperand = displayResult.innerHTML; 

    // Resetto numero su display
    displayResult.innerHTML= '';

    // salvo operazione
    console.log("Primo operando:", firstOperand);

});


}


// cancel button


