let state = {
  displayNumber: "0",
  firstNumber: "",
  isWaitingForNextNumber: false,
  operator: "",
  result: ""
};

const display = document.getElementById("TxtDisplayCalculation");

function setState(newState) {
  state = newState;
}

function initializeButtons() {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(button => {
    switch (button.innerHTML) {
      case "CE":
        button.addEventListener("click", () => {
          clearCalculation();
          updateCalculation();
        });
        break;

      case "+/-":
        button.addEventListener("click", () => {
          reverseNumber();
          updateCalculation();
        });
        break;

      case "+":
        button.addEventListener("click", () => {
          setOperator("+");
        });
        break;

      case "-":
        button.addEventListener("click", () => {
          setOperator("-");
        });
        break;

      case "=":
        console.log("Equals");
        break;

      default:
        button.addEventListener("click", () => {
          setCalculation(button.innerHTML);
          updateCalculation();
        });
    }
  });
}

function reverseNumber() {
  const reversetedNumber = parseInt(state.displayNumber) * -1;

  setState({
    ...state,
    displayNumber: reversetedNumber
  });
}

function setCalculation(value) {
  const validatedNumber =
    state.displayNumber === "0" ? value : state.displayNumber + value;

  setState({
    ...state,
    displayNumber: validatedNumber
  });
}

function setOperator(value) {
  setState({
    displayNumber: "",
    firstNumber: state.displayNumber,
    operator: value
  });

  console.log(state);
}

function updateCalculation() {
  display.innerHTML = state.displayNumber;
}

function clearCalculation() {
  setState({
    displayNumber: "0",
    firstNumber: "",
    operator: ""
  });
}

initializeButtons();
