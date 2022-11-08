const displayBefore = document.querySelector('#display-last')
const displayNow = document.querySelector('#display-current')
const compute = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const numbers = document.querySelectorAll('.btn-num')
const operators = document.querySelectorAll('.btn-op')

let firstOperand = ''
let secondOperand = ''
let operator = ''
let resetDisplay = false

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        appendInput(btn.textContent)
    })
})

operators.forEach(btn => {
    btn.addEventListener('click', () => {
        appendOperation(btn.textContent)
        check = true
    })
})

compute.addEventListener('click', () => {
    if (displayNow.textContent !== '' && operator !== '') {
        secondOperand = Number(displayNow.textContent)
        displayBefore.textContent = `${firstOperand} ${operator} ${secondOperand} =`
        firstOperand = operate(firstOperand, operator, secondOperand);
        displayNow.textContent = firstOperand;
    }
})

clear.addEventListener('click', () => {
    displayNow.textContent = '0'
    displayBefore.textContent = ''
    firstOperand = ''
    secondOperand = ''
    operator = ''
    check = false
})

let appendInput = num => {
    if (displayNow.textContent === '0' || check === true) {
        displayNow.textContent = num
        check = false
    }
    else 
        displayNow.textContent += num
}

let appendOperation = op => {
    if (displayBefore.textContent === '') {
        firstOperand = Number(displayNow.textContent)
        operator = op
        displayBefore.textContent = `${firstOperand} ${operator}`
        displayNow.textContent = `${firstOperand}`
    }
    else {
        secondOperand = Number(displayNow.textContent)
        // secondExists = true
        operator = op
        displayBefore.textContent = `${firstOperand} ${operator} ${secondOperand} =`
        firstOperand = operate(firstOperand, operator, secondOperand)
        displayNow.textContent = `${firstOperand}`
    }
}

let add = (a, b) => {
    return a + b
}

let subtract = (a, b) => {
    return a - b
}

let multiply = (a, b) => {
    return a * b
}

let divide = (a, b) => {
    return a / b
}

let operate = (a, operation, b) => {
    if (operation === '+') 
        return add(a, b)
    else if (operation === '-')
        return subtract(a, b)
    else if (operation === 'x')
        return multiply(a, b)
    else if (operation === '%')
        return divide(a, b)
}