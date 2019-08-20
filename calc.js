const button1 = document.getElementById("1-button");
const button2 = document.getElementById("2-button");
const button3 = document.getElementById("3-button");
const button4 = document.getElementById("4-button");
const button5 = document.getElementById("5-button");
const button6 = document.getElementById("6-button");
const button7 = document.getElementById("7-button");
const button8 = document.getElementById("8-button");
const button9 = document.getElementById("9-button");
const button0 = document.getElementById("0-button");
const buttonDecimal = document.getElementById("decimal-point-button");

//function buttons
const buttonDivide = document.getElementById("divide-button");
const buttonMultiply = document.getElementById("multiply-button");
const buttonSubtract = document.getElementById("subtract-button");
const buttonAdd = document.getElementById("add-button");

const buttonEquals = document.getElementById("equals-button");

const buttonClear = document.getElementById("clear-button");

//active value variables
let firstValue;
let firstValueString = "";
let secondValue;
let secondValueString = "";
let currentOperator = null;

//display variables
const displayLine1 = document.getElementById("display-line-1-value");
const displayLine2 = document.getElementById("display-line-2-value");

function updateDisplay(){
    displayLine1.textContent = firstValueString;
    displayLine2.textContent = secondValueString;
}

function clearSystem(){
    firstValue = null;
    firstValueString = "";
    secondValue = null;
    secondValueString = "";
    currentOperator = null;
    updateDisplay();
}
 function numberPressed(inputNumber){
    let inputString = inputNumber.toString();
    secondValueString += inputString;
    updateDisplay();
}
function operatorPressed(inputOperator){
    firstValueString = secondValueString;
    secondValueString = "";
    firstValueString += " " + inputOperator;
    if(currentOperator !=null){
        evaluate(firstValue, currentOperator, secondValue);
    }
    currentOperator = inputOperator;
}

button0.addEventListener("click", function(){numberPressed(0);});
button1.addEventListener("click", function(){numberPressed(1);});
button2.addEventListener("click", function(){numberPressed(2);});
button3.addEventListener("click", function(){numberPressed(3);});
button4.addEventListener("click", function(){numberPressed(4);});
button5.addEventListener("click", function(){numberPressed(5);});
button6.addEventListener("click", function(){numberPressed(6);});
button7.addEventListener("click", function(){numberPressed(7);});
button8.addEventListener("click", function(){numberPressed(8);});
button9.addEventListener("click", function(){numberPressed(9);});

buttonClear.addEventListener("click", function(){clearSystem();});

buttonAdd.addEventListener("click", function(){operatorPressed("+");});
buttonSubtract.addEventListener("click", function(){operatorPressed("-");});
buttonMultiply.addEventListener("click", function(){operatorPressed("*");});
buttonDivide.addEventListener("click", function(){operatorPressed("/");});