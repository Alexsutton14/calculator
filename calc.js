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
let decimalPointPresent = false;

//display variables
const displayLine1 = document.getElementById("display-line-1-value");
const displayLine2 = document.getElementById("display-line-2-value");

//display rendered sizes, currently unused
const displayLine1Style = window.getComputedStyle(displayLine1, null);
const displayLine1Width = parseInt(displayLine1Style.getPropertyValue("width"), 10);
const displayLine2Style = window.getComputedStyle(displayLine2, null);
const displayLine2Width = parseInt(displayLine2Style.getPropertyValue("width"), 10);

function checkSize(inputString, line){
    let newFontSize;
    //sets new font size if string is longer than set number of characters
    if (inputString.length > 12 && inputString.length <=17){
        newFontSize = "40px";
    } else if (inputString.length >17){
        newFontSize = "30px";
    } else {
        newFontSize = "55px";
    }
    //applies new size to display lines
    switch (line){
        case 1:
            displayLine1.style.fontSize = newFontSize;
            break
        case 2:
            displayLine2.style.fontSize = newFontSize;
            break
        default:
            console.log("Error in checkSize");
            break
    }
}

function multiply(inputA, inputB){
    return inputA * inputB;
}

function divide(inputA, inputB){
    if(inputA == 0 || inputB == 0){
        console.log("Error in divide: div by zero");
        return "ERROR";
    }
    return inputA / inputB;
}

function subtract(inputA, inputB){
    return inputA - inputB;
}

function add(inputA, inputB){
    return inputA + inputB;
}

function evaluate(inputA, inputOperator, inputB){
    let result;
    //converts strings to numbers
    inputAValue = parseFloat(inputA);
    inputBValue = parseFloat(inputB);
    //moves all values to top line
    firstValueString = `${inputA} ${inputB} =`;
    //executes maths
    switch(inputOperator){
        case "*":
            result = multiply(inputAValue, inputBValue);
            break
        case "/":
            result = divide(inputAValue, inputBValue);
            break
        case "-":
            result = subtract(inputAValue, inputBValue);
            break
        case "+":
            result = add(inputAValue, inputBValue);
            break
        default:
            console.log("Error in evaluate: invalid operator");
            break
    }
    //puts result into second line value
    secondValue = result;
    //converts second line value to string
    secondValueString = secondValue.toString();
    updateDisplay();
}

function updateDisplay(){
    //reduces font size if string is too long
    checkSize(firstValueString, 1);
    checkSize(secondValueString, 2);
    //applies strings to elements
    displayLine1.textContent = firstValueString;
    displayLine2.textContent = secondValueString;
}

function clearSystem(){
    firstValue = null;
    firstValueString = "";
    secondValue = null;
    secondValueString = "";
    currentOperator = null;
    decimalPointPresent = false;
    updateDisplay();
}
 function numberPressed(inputNumber){
    //clears system first if previous result was ERROR
    if(secondValueString === "ERROR"){
         clearSystem();
    }
    let inputString = inputNumber.toString();
    secondValueString += inputString;
    updateDisplay();
}
function operatorPressed(inputOperator){
    //Moves input to top line
    firstValueString = secondValueString;
    //clears bottom line
    secondValueString = "";
    //Adds operator to top line
    firstValueString += " " + inputOperator;
    updateDisplay();
    currentOperator = inputOperator;
}

function equalsPressed(){
    //prevents multiple presses of equals
    if(currentOperator == null){
        return null;
    }
    evaluate(firstValueString, currentOperator, secondValueString);
    currentOperator = null;
    decimalPointPresent = false;
}

function addDecimalPoint(){
    if(secondValueString === ""){
        secondValueString = "0.";
        decimalPointPresent = true;
    }
    if(decimalPointPresent == false){
        secondValueString += ".";
    }
    updateDisplay();
}

//Adds events for each button
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
buttonDecimal.addEventListener("click", function(){addDecimalPoint();});

buttonAdd.addEventListener("click", function(){operatorPressed("+");});
buttonSubtract.addEventListener("click", function(){operatorPressed("-");});
buttonMultiply.addEventListener("click", function(){operatorPressed("*");});
buttonDivide.addEventListener("click", function(){operatorPressed("/");});

buttonEquals.addEventListener("click", function(){equalsPressed();});