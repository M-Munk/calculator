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
