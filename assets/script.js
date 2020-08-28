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
let firstNumber = ""; //stores first value before operator
let secondNumber = ""; //stores second value after operator
let operation = ""; //stores operator
let displayValue = ""; //displays on screen
let result = "";

//listen for clicks on keys
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.srcElement.classList.contains("num") && !firstNumber) {
      if (displayValue === 0) {
        displayValue = "";
      }
      displayValue += e.srcElement.innerText;
      updateDisplay(displayValue);
    }
    if (e.srcElement.classList.contains("symbol")) {
      operation = e.srcElement.innerText;
      firstNumber = parseInt(displayValue);
      oneElement(firstNumber, operation);
    }
    if (firstNumber && operation) {
      if (e.srcElement.classList.contains("num")) {
        displayValue += e.srcElement.innerText;
        updateDisplay(displayValue);
      }
    }
    if (
      e.srcElement.classList.contains("symbol") &&
      !secondNumber &&
      firstNumber &&
      operation &&
      displayValue
    ) {
      secondNumber = parseInt(displayValue);
      console.log(secondNumber);
      result = calculate(firstNumber, secondNumber, operation);
      updateDisplay(result);
      if (e.srcElement.innerText === "=") {
        // clearVariables();
      } else firstNumber = result;
    }
  });
});

//updates the display value
function updateDisplay(displayValue) {
  document.getElementById("output").innerHTML = displayValue;
  return;
}

//evaluates single argument calculator operations
function oneElement(firstNum, math) {
  if (math === "AC") {
    displayValue = 0;
    clearVariables();
    return;
  } else if (math === "%") {
    displayValue = percent(firstNum);
    updateDisplay(displayValue);
    operation = "";
    firstNumber = parseInt(displayValue);
    return;
  } else if (math === "±") {
    displayValue = changeSign(firstNum);
    updateDisplay(displayValue);
    operation = "";
    firstNumber = parseInt(displayValue);
  } else if (math === "+" || math === "-" || math === "*" || math === "/") {
    displayValue = "";
    updateDisplay(displayValue);
  }
}

//evaluates two argument calculator operations
function calculate(firstNum, secondNum, math) {
  let result = 0;
  switch (math) {
    case "+":
      result = add(firstNum, secondNum);
      document.getElementById("output").innerHTML = result;
      clearVariables();
      return result;
    case "-":
      result = subtract(firstNum, secondNum);
      document.getElementById("output").innerHTML = result;
      clearVariables();
      return result;
    case "*":
      result = multiply(firstNum, secondNum);
      document.getElementById("output").innerHTML = result;
      clearVariables();
      return result;
    case "/":
      if (secondNum === 0) {
        document.getElementById("output").innerHTML = "don't do that";
        break;
      }
      result = divide(firstNum, secondNum);
      document.getElementById("output").innerHTML = result.toFixed(2);
      clearVariables();
      return result.toFixed(2);
    default:
      break;
  }
}

//clears all math variables
function clearVariables() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
}
