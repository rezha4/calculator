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
        if (arr.length == 0 && Allsymbols.includes(button.id)) {
            console.log(`NaN --> ${button.id}`);
            return;
        }
        else if (arr.length == 0 && !(Allsymbols.includes(button.id))) {
            i += button.id;
            console.log(i);
            arr[0] = i;
            console.log(arr);
        }
        else if (arr.length == 1 && !(Allsymbols.includes(button.id))) {
            i += button.id;
            console.log(i);
            arr[0] = i;
            console.log(arr);
        }
        else if (arr.length == 1 && Allsymbols.includes(button.id)) {
            op = button.id;
            arr[1] = op;
            console.log(arr);
        }
        else if (arr.length == 2 && Allsymbols.includes(button.id)) {
            op = button.id;
            arr[1] = op;
            console.log(arr);
        }
        else if (arr.length >= 2 && !(Allsymbols.includes(button.id))) {
            j += button.id;
            arr[2] = j;
            console.log(arr)
        }
        else if (arr.length > 2 && button.id == "=") {
            result += operator(Number(arr[0]), arr[1], Number(arr[2]));
            arr = [];
            i = [];
            op = [];
            j = [];
        }
//        if (arr.length < 3 && )
        // if (arr.length < 3) {
        //     arr.push(button.id);
        // }
        // else {
        //     result = operator(Number(arr[0]), arr[1], Number(arr[2]));
        //     arr = [];
        // }
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