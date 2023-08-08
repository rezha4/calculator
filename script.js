let i = [];
let j = [];
let op = [];
let arr = [];
let result = 0;
let Allsymbols = ["c", "=", "+", "-", "*", "/"];

const buttons = document.querySelectorAll("button");
let displayEqu = document.querySelector(".equation");
let displayRes = document.querySelector(".result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const symbol = ["+", "-", "/", "*", "=", "c"];
        //bunch of number for i
        //until symbol is inserted
        //then insert symbol
        //until another num is inserted
        //then insert bunch of number for j
        //until another op is pressed
        //then operate i op j
        
        if (symbol.includes(button.id)) {
            op = button.id;
            console.log(op);
            arr[0] = i;
            console.log(arr)
        }
        else if (arr.length === 0) {
            i += button.id;
            console.log(i);
        }
        else if (arr.length > 0) {
            arr[1] = op;
            j += button.id;
            console.log(arr);
            console.log(j);
        }

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