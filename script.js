

let i = "";
let j = "";
let op = ""

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (Number.isInteger(Number(button.id))) {
            i += button.id;
        }
        else if (isNaN(button.id)) {
            op = button.id;
            return;
        }
        j += button.id;
        console.log(i)
        console.log(op)
        console.log(j)

        //if num is inputted, fill i
        //keep filling i until ops is called, then fill op
        //
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