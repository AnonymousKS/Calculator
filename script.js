function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    if(second === 0) return 'Seriously, dude';
    else 
    return first / second;
}

function operate(first, operator, second) {
    let result;
    if(operator === '+') result = add(first, second);
    else if(operator === '-') result = subtract(first, second);
    else if(operator === '*') result = multiply(first, second);
    else if(operator === '/') result = divide(first, second);
    else return 'Please Select a valid operator';
    return result;
}
