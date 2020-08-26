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
    console.log(e.srcElement.classList);
    if (e.srcElement.classList.contains("num")) {
      console.log(e.srcElement.innerText);
      displayValue += e.srcElement.innerText;
      document.getElementById("output").innerHTML = displayValue;
      console.log(document.getElementById("output").innerHTML);
    }
  });
});

function calculate(firstNumber, secondNumber, operation) {
  let result = 0;
  switch (operation) {
    case "addition":
      result = add(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "subtraction":
      result = subtract(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "multiplication":
      result = multiply(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result;
      return result;
    case "division":
      if (secondNumber === 0) {
        document.getElementById("output").innerHTML = "don't do that";
        break;
      }
      result = divide(firstNumber, secondNumber);
      document.getElementById("output").innerHTML = result.toFixed(1);
      return result.toFixed(1);
    default:
      break;
  }
}
