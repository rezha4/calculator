let i = "";
let j = "";
let op = "";
let arr = [];

const buttons = document.querySelectorAll("button");
let equation = document.querySelector(".equation");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayEquation(button.id);
        arr.push(button.id);
        console.log(arr);
    })
});

function displayEquation(i) {
    equation.textContent = `${i}`;
}

function operator(i, op, j) {
    if (op === "+") {
        return add(i, j);
    }
    else if (op === "-") {
        return subtract(i, j);
    }
    else if (op === "*") {
        return multiply(i, j);
    }
    else if (op === "/") {
        return divide(i, j);
    }
}

function add(i, j) {
    return i + j;
}

function subtract(i, j) {
    return i - j;
}

function multiply(i, j) {
    return i * j;
}

function divide(i, j) {
    return i / j;
}