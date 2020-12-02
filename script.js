const button = document.querySelectorAll('#num');
const screen = document.querySelector('.screen');
const plus = document.querySelector('.plus');
const operator = document.querySelectorAll('#operator');
const equal = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear')
const decimal = document.querySelector('.point')
let newNum = false;
let result;
let displayValue1 = [];
let displayValue2 = [];
let op;



function sum(a, b) {
    a = displayValue1.join('');
    b = displayValue2.join('');
    result = parseFloat(a) + parseFloat(b);
    screen.setAttribute('value', result);
}

function minus(a, b) {
    a = displayValue1.join('');
    b = displayValue2.join('');
    result = parseFloat(a) - parseFloat(b);
    screen.setAttribute('value', result);
}

function multi(a, b) {
    a = displayValue1.join('');
    b = displayValue2.join('');
    result = parseFloat(a) * parseFloat(b);
    screen.setAttribute('value', result);
}

function divide(a, b) {
    a = displayValue1.join('');
    b = displayValue2.join('');
    if (a == '0' || b == '0') {
        alert("I'm sorry Dave, I'm afraid I can't do that")

    } else {
        result = parseFloat(a) / parseFloat(b);
        screen.setAttribute('value', result);
    }
}

function solve() {
    if (op == '+') {
        sum(displayValue1, displayValue2);
        displayValue1 = [...result.toString()];
        displayValue2 = [];
        op = '';
    } else if (op == '-') {
        minus(displayValue1, displayValue2);
        displayValue1 = [...result.toString()];
        displayValue2 = [];
        op = '';
    } else if (op == '*') {
        multi(displayValue1, displayValue2);
        displayValue1 = [...result.toString()];
        displayValue2 = [];
        op = '';
    } else if (op == '/') {
        divide(displayValue1, displayValue2);
        displayValue1 = [...result.toString()];
        displayValue2 = [];
        op = '';
    }
}


equal.addEventListener('click', solve);

decimal.addEventListener('click', () => {
    if (!displayValue1.includes('.') || !displayValue2.includes('.')) {
        if (!newNum) {
            displayValue1.push(decimal.value);
            screen.setAttribute('value', displayValue1.join(''));
        } else {
            displayValue2.push(decimal.value);
            screen.setAttribute('value', displayValue2.join(''))
        }
    } else {
        return
    }
})

clear.addEventListener('click', () => {
    newNum = false;
    result;
    op;
    displayValue1 = [];
    displayValue2 = [];
    screen.setAttribute('value', '0000');
})

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (newNum === true) {
            solve();
        }
        if (displayValue1 == '') {
            return
        } else {
            op = operator.value;
            newNum = true;

        }

    })
})

button.forEach((button) => {
    button.addEventListener('click', () => {
        if (!newNum) {
            displayValue1.push(button.value);
            screen.setAttribute('value', displayValue1.join(''));
            console.log('value 1');
        } else {
            displayValue2.push(button.value);
            screen.setAttribute('value', displayValue2.join(''));
            console.log('value 2');
        }
    })
})
