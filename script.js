let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});


document.addEventListener("keydown", (e) => {
    
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


function handleInput(value) {
    if (value == "=") {
        try {
            string = eval(string); 
            input.value = string; 
        } catch (error) {
            input.value = "Error"; 
        }

    } else if (value == 'AC') {
        string = ""; 
        input.value = string; 

    } else if (value == 'DEL') {
        string = string.substring(0, string.length - 1); 
        input.value = string; 

    } else {
        string += value; 
        input.value = string; 
    }
}