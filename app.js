//puts buttons into a node list
const numberButtons = document.querySelectorAll(".numbers")

//selects display
const display = document.querySelector(".display");

//defining the number buttons 
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");

//defines each operator button
const operatorButtons = document.querySelectorAll(".operator");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");

//empty variables
let resNum = "";
let operator = "";
let previousInput = "";
let currentInput = "";

//Math for each operator
function addition (previousInput, currentInput) {
    return previousInput + currentInput;
}

function subtraction (previousInput, currentInput) {
    return previousInput - currentInput;
}

function multiplication (previousInput, currentInput) {
    return previousInput * currentInput;
}

function division (previousInput, currentInput) {
   return previousInput / currentInput;
}

// Operate functions
const operate = function (operator, previousInput , currentInput) {
    switch (operator) {
        case "+": 
            return addition(parseFloat(previousInput),parseFloat(currentInput));
            break;
        case "-":
            return subtraction(parseFloat(previousInput),parseFloat(currentInput));
            break;
        case "*":
            return multiplication(parseFloat(previousInput),parseFloat(currentInput));
            break;
        case "/":
            return division(parseFloat(previousInput),parseFloat(currentInput));
            break;
        case "=":
            break;
        default:
            console.log("Operator didn't Work");
        };
    };

//For each operation
operatorButtons.forEach(opButton => {
    opButton.addEventListener('click', () => {
        switch(opButton) {
            case add:
                if (!previousInput) {
                    previousInput = parseFloat(display.textContent);
                    currentInput = 0;
                    operator = "+";
                }else {
                    resNum = operate(operator, previousInput, currentInput);
                    previousInput = resNum;
                    currentInput = 0;
                    display.textContent = resNum;
                    operator = "+";
                }
                break;
            case subtract:
                if (!previousInput) {
                    previousInput = parseFloat(display.textContent);
                    currentInput = 0;
                    operator ="-";
                }else {
                    resNum = operate(operator, previousInput, currentInput);
                    previousInput = resNum;
                    currentInput = 0;
                    display.textContent = resNum;
                    operator ="-";
                }
                break;
            case multiply:
                if (!previousInput) {
                    previousInput = parseFloat(display.textContent);
                    currentInput = 0;
                    operator ="*";
                }else {
                    resNum = operate(operator, previousInput, currentInput);
                    previousInput = resNum;
                    currentInput = 0;
                    display.textContent = resNum;
                    operator ="*";
                }
                break;
            case divide:
                if (!previousInput) {
                    previousInput = parseFloat(display.textContent);
                    currentInput = 0;
                    operator ="/";
                }else {
                    resNum = operate(operator, previousInput, currentInput);
                    previousInput = resNum;
                    currentInput = 0;
                    display.textContent = resNum;
                    operator ="/";
                }
                break;
            case equals:
                if (!previousInput) {
                    display.textContent = currentInput;
                    previousInput = parseFloat(display.textContent);
                    currentInput = 0;
                } else {
                    resNum = operate(operator, previousInput, currentInput);
                    display.textContent = resNum;
                    previousInput = resNum;
                    currentInput = 0;
                }
                break;
            default:
                console.log("Operator did not work")
            };
            console.log("previousInput: " + previousInput);
            console.log("currentInput: " + currentInput);
            console.log( "resNum: " + resNum);
            console.log("operator: " + operator);
        
    });
});

//This clears the display
const clear = document.querySelector(".clear");
clear.addEventListener('click',() => {
    display.textContent = 0;
    currentInput = 0;
    previousInput = 0;
})

//What each number button does
numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        switch (button) {
            case one:
                display.textContent = 
                parseFloat(currentInput + "1");
                currentInput = parseFloat(display.textContent);
                break;
            case two:
                display.textContent = 
                parseFloat(currentInput + "2");
                currentInput = parseFloat(display.textContent);
                break;
            case three:
                display.textContent = 
                parseFloat(currentInput + "3");
                currentInput = parseFloat(display.textContent);
                break;
            case four:
                display.textContent = 
                parseFloat(currentInput + "4");
                currentInput = parseFloat(display.textContent);
                break;
            case five:
                display.textContent = 
                parseFloat(currentInput + "5");
                currentInput = parseFloat(display.textContent);
                break;
            case six:
                display.textContent = 
                parseFloat(currentInput + "6");
                currentInput = parseFloat(display.textContent);
                break;
            case seven:
                display.textContent = 
                parseFloat(currentInput + "7"); 
                currentInput = parseFloat(display.textContent);
                break; 
            case eight:
                display.textContent = 
                parseFloat(currentInput + "8");
                currentInput = parseFloat(display.textContent);
                break;
            case nine:
                display.textContent = 
                parseFloat(currentInput + "9");
                currentInput = parseFloat(display.textContent);
                break;
            case zero:
                display.textContent = 
                parseFloat(currentInput + "0");
                currentInput = parseFloat(display.textContent);
                break; 
            case decimal:
                display.textContent = 
                parseFloat(currentInput) + ".";
                currentInput = display.textContent;     
            default:
                console.log("Number button didn't work")
            }
            console.log("previousInput: " + previousInput);
            console.log("currentInput: " + currentInput);
            console.log( "resNum: " + resNum);
            console.log("operator: " + operator);
    });

});