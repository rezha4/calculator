let i = [];
let j = [];
let op = "";
let arr = [];
let result = 0;
let Allsymbols = ["=", "+", "-", "*", "/"];

const buttons = document.querySelectorAll("button");
let displayEqu = document.querySelector(".equation");
let displayRes = document.querySelector(".result");

displayRes.textContent = `${result}`;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "c") {
            i = [];
            j = [];
            op = "";
            arr = [];
            result = 0;
        }
        else if (arr.length == 0 && Allsymbols.includes(button.id)) {
            //if operator is pressed first, nothing happens
            return;
        }
        else if (arr.length == 0 && !(Allsymbols.includes(button.id))) {
            //once number is pressed, i is added and added to arr0
            i += button.id;
            arr[0] = i;
        }
        else if (arr.length == 1 && !(Allsymbols.includes(button.id))) {
            //if number is pressed, i is added and added again
            i += button.id;
            arr[0] = i;
        }
        else if (arr.length == 1 && Allsymbols.includes(button.id)) {
            //if ops is pressed, op is added and added to arr1
            op = button.id;
            arr[1] = op;
        } 
        else if (arr.length == 2 && Allsymbols.includes(button.id)) {
            //if op pressed, op is added and added again
            op = button.id;
            arr[1] = op;
            console.log(arr);
        }
        else if (arr.length >= 2 && !(Allsymbols.includes(button.id))) {
            //if number is pressed, j is added and added to arr2
            j += button.id;
            arr[2] = j;
            console.log(arr)
        }
        else if (arr.length > 2 && Allsymbols.includes(button.id)) {
            result += operator(Number(arr[0]), arr[1], Number(arr[2]));
            arr = [];
            i = [];
            op = "";
            j = [];
        }
        displayEqu.textContent = `${arr}`;
        displayRes.textContent = `${result}`;
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