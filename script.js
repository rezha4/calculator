let i = [];
let j = [];
let op = [];
let arr = [];
let result = 0;

const buttons = document.querySelectorAll("button");
let displayEqu = document.querySelector(".equation");
let displayRes = document.querySelector(".result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (arr.length < 3) {
            arr.push(button.id);
            console.log(arr)
        }
        else {
            result = operator(Number(arr[0]), arr[1], Number(arr[2]));
            arr = [];
        }
        displayEqu.textContent = `${arr}`;
        displayRes.textContent = `${result}`;
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