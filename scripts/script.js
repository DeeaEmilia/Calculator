let calculation = [];
let decimalEntered = false; // keep track of whether a decimal point has been entered
const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");
const digitWidth = document
  .querySelector("button")
  .getBoundingClientRect().width;

function calculate(button) {
  const value = button.textContent;
  const maxDigits = Math.floor((screenDisplay.offsetWidth / digitWidth) * 2); // adjust divisor to your font-size

  if (value == "DEL") {
    screenDisplay.textContent = "";
    decimalEntered = false; // reset the flag for decimal point
  } else if (value === "=") {
    screenDisplay.textContent = eval(screenDisplay.textContent).toFixed(2); // specify number of decimal places here
    decimalEntered = false; // reset the flag for decimal point
  } else if (value === "C") {
    const currentText = screenDisplay.textContent;
    screenDisplay.textContent = currentText.slice(0, -1); // remove the last character
    decimalEntered = false; // reset the flag for decimal point
  } else if (value === ".") {
    if (!decimalEntered) {
      screenDisplay.textContent += value;
      decimalEntered = true; // set the flag for decimal point
    }
  } else if (screenDisplay.textContent.length < maxDigits) {
    screenDisplay.textContent += value;
  } else {
    const modal = document.querySelector(".modal");
    const okayButton = modal.querySelector(".btn-okay");

    modal.style.display = "block";
    okayButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
