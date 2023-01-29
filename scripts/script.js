const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value == "DEL") {
    calculation = [];
    screenDisplay.textContent = null;
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)))