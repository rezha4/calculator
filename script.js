let i = [];
let j = [];
let op = [];
let arr = [];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (arr.length < 3) {
            arr.push(button.id);
            console.log(arr)
        }
        else {
            console.log(operator(Number(arr[0]), arr[1], Number(arr[2])));
            arr = [];
        }
        
        // const symbol = ["+", "-", "/", "*", "c"];
        // if (!(symbol.includes(button.id))) {
        //     i += button.id;
        //     console.log(i);
        // }
        // else if (symbol.includes(button.id)) {
            
        // }
        
        // if (symbol.includes(button.id)) {
        //     op = button.id;
        //     console.log(op);
        //     arr[0] = i;
        //     console.log(arr)
        // }
        // else if (arr.length === 0) {
        //     i += button.id;
        //     console.log(i);
        // }
        // else if (arr.length > 0) {
        //     arr[1] = op;
        //     j += button.id;
        //     console.log(arr);
        //     console.log(j);
        // }
        // else if (button.id == "=") {
        //     arr[2] = j;
        //     console.log(arr)
        //     let result = operator(arr[0], arr[1], arr[2]);
        //     console.log(result);
        // }

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