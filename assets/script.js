//basic math functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function changeSign(a) {
  return -a;
}
function percent(a) {
  return a / 100;
}
//variables for calculator operation
let firstNumber = null; //stores first value before operator
let secondNumber = null; //stores second value after operator
let operation = null; //stores operator
let displayValue = ""; //displays on screen

//listen for clicks on numbers
const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    console.log(e.srcElement.innerText);
    let numClicked = e.srcElement.innerText;
    setDisplayValue(numClicked);
  });
});

// listen for clicks on symbols and do math:
// if there is no first number set,
// sets the first number and operation when operation is clicked
// then sets operation in continuing cases after it is cleared by updateVariables
// ie after single value operation or after multiple operations where
// result becomes the first operand
// last it will set the second operand and if the final operator is not "=", it will
// set the next operator in sequence

const symbols = document.querySelectorAll(".symbol");
symbols.forEach((symbol) => {
  symbol.addEventListener("click", (e) => {
    console.log(e.srcElement.innerText);
    let mathSymbol = e.srcElement.innerText;
    if (!firstNumber) {
      if (mathSymbol !== "=") {
        setOperation(mathSymbol);
      }
      setFirstNumber(displayValue);
      displayValue = 0;
      oneElement(firstNumber, operation);
    } else if (firstNumber && !operation) {
      if (mathSymbol !== "=") {
        setOperation(mathSymbol);
      }
      console.log(operation);
      displayValue = 0;
      oneElement(firstNumber, operation);
    } else if (!secondNumber) {
      setSecondNumber(displayValue);
      console.log(secondNumber);
      let result = calculate(firstNumber, secondNumber, operation);
      updateDisplay(result);
      if (mathSymbol !== operation && mathSymbol !== "=") {
        setOperation(mathSymbol);
        displayValue = 0;
      }
    }
  });
});

//updates the display value & makes sure it won't overrun display
function updateDisplay(value) {
  string = value.toString();
  if (string.length > 12) {
    console.log("true");
    displayValue = value.toExponential(4);
    console.log(displayValue);
  }
  document.getElementById("output").innerHTML = displayValue;
  return;
}

function setDisplayValue(numberClicked) {
  if (displayValue.length >= 12) {
    return;
  }
  if (displayValue === 0) {
    displayValue = "";
  }
  displayValue += numberClicked;
  updateDisplay(displayValue);
}

//variable setters
function setFirstNumber(displayNum) {
  firstNumber = parseFloat(displayNum);
}

function setOperation(clickedSymbol) {
  operation = clickedSymbol;
}

function setSecondNumber(displayNum) {
  secondNumber = parseFloat(displayNum);
  return secondNumber;
}

//evaluates single argument calculator operations
function oneElement(firstNum, math) {
  let result = 0;
  switch (math) {
    case "AC":
      clearVariables(0);
      updateDisplay(displayValue);
      return;
    case "%":
      result = percent(firstNum);
      displayValue = result;
      updateDisplay(displayValue);
      firstNumber = parseFloat(displayValue);
      operation = null;
      return;
    case "±":
      result = changeSign(firstNum);
      displayValue = result;
      updateDisplay(displayValue);
      firstNumber = parseFloat(displayValue);
      operation = null;
      return;
    default:
      return;
  }
}

//evaluates two argument calculator operations
function calculate(firstNum, secondNum, math) {
  let result = 0;
  switch (math) {
    case "+":
      result = add(firstNum, secondNum);
      displayValue = result;
      updateVariables();
      return result;
    case "-":
      result = subtract(firstNum, secondNum);
      displayValue = result;
      updateVariables();
      return result;
    case "*":
      result = multiply(firstNum, secondNum);
      displayValue = result;
      updateVariables();
      return result;
    case "÷":
      if (secondNum === 0) {
        document.getElementById("output").innerHTML = "don't do that";
        return;
      }
      result = divide(firstNum, secondNum);
      displayValue = result;
      updateVariables();
      return result;
    default:
      break;
  }
}

//clears all math variables
function clearVariables(displayResult) {
  firstNumber = null;
  secondNumber = null;
  operation = null;
  displayValue = displayResult;
}

//updates variables after operation & sets first number to the result
function updateVariables() {
  secondNumber = null;
  firstNumber = displayValue;
  operation = null;
}
