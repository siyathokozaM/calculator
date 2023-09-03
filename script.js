const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button input");

// Initialize the calculator state
let equation = ""; // Store the equation string

// function to update the display
function updateDisplay() {
  display.value = equation || "0";
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      // Clear the calculator
      equation = "";
    } else if (value === "DE") {
      // Delete the last character
      equation = equation.slice(0, -1);
    } else if (value === "=") {
      // Calculate the result
      try {
        const result = eval(equation);
        equation = result.toString();
      } catch (error) {
        equation = "Error";
      }
    } else {
      // Add the value to the equation
      equation += value;
    }

    updateDisplay();
  });
});

// Initialize the display
updateDisplay();
