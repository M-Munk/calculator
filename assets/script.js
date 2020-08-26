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

//listen for clicks on keys
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.srcElement.classList.contains("num")) {
      if (displayValue === 0) {
        displayValue = "";
      }
      displayValue += e.srcElement.innerText;
      updateDisplay(displayValue);
    }
    if (e.srcElement.classList.contains("symbol")) {
      operation = e.srcElement.innerText;
      console.log(operation);
      firstNumber = parseInt(displayValue);
      console.log(firstNumber);
      oneElement(firstNumber, operation);
    }
    if (firstNumber && operation) {
      displayValue = "";
      updateDisplay(displayValue);
      //   if (e.srcElement.classList.contains("num")) {
      //     displayValue += e.srcElement.innerText;
      //     updateDisplay(displayValue);
      //   } else if (e.srcElement.classList.contains("symbol")) {
      //     secondNumber = parseInt(displayValue);
      //     console.log(secondNumber);
      //     result = calculate(firstNumber, secondNumber, operation);
      //     updateDisplay(result);
      //   }
    }
  });
});

function updateDisplay(displayValue) {
  document.getElementById("output").innerHTML = displayValue;
  return;
}

function oneElement(firstNumber, operation) {
  if (operation === "AC") {
    displayValue = 0;
    updateDisplay(displayValue);
    firstNumber = "";
    return;
  } else if (operation === "%") {
    displayValue = percent(firstNumber);
    updateDisplay(displayValue);
    firstNumber = "";
    return;
  } else if (operation === "±") {
    displayValue = changeSign(firstNumber);
    updateDisplay(displayValue);
    firstNumber = parseInt(displayValue);
  }
}

function calculate(firstNumber, secondNumber, operation) {
  let result = 0;
  switch (operation) {
    case "+":
      result = add(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "-":
      result = subtract(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "*":
      result = multiply(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "/":
      if (secondNumber === 0) {
        document.getElementById("output").innerHTML = "don't do that";
        break;
      }
      result = divide(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result.toFixed(2);
      return result.toFixed(2);
    default:
      break;
  }
}
