

let i = "";
let j = "";
let op = ""

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //array method split by " " (space)
        //array[ , , ]
    })
})

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