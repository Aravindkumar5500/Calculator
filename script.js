let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Add event listener for keyboard input
document.addEventListener("keydown", (e) => {
    // Allow numbers, operators, Enter, Backspace, and Escape
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/'].includes(e.key)) {
        handleInput(e.key);
    } else if (e.key === 'Enter') {
        handleInput('=');
    } else if (e.key === 'Backspace') {
        handleInput('DEL');
    } else if (e.key === 'Escape') {
        handleInput('AC');
    }
});

// Function to handle input from both click and keyboard events
function handleInput(value) {
    if (value == "=") {
        try {
            string = eval(string); // Evaluate the expression
            input.value = string; // Display the result
        } catch (error) {
            input.value = "Error"; // Display error for invalid expressions
            string = ""; // Clear the string to reset the input
        }

    } else if (value == 'AC') {
        string = ""; // Clear the expression
        input.value = string; // Reset the input display

    } else if (value == 'DEL') {
        string = string.substring(0, string.length - 1); // Remove the last character
        input.value = string; // Update the input display

    } else {
        string += value; // Append clicked button content to the string
        input.value = string; // Display the updated expression
    }
}