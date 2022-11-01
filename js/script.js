const displayNow = document.querySelector('#display-current')
const displayBefore = document.querySelector('#display-last')
const clear = document.querySelector('.clear')
// const addition = document.querySelector('.add')
// const subtraction = document.querySelector('.sub')
// const multiplication = document.querySelector('.mult')
// const division = document.querySelector('.div')
const operators = document.querySelectorAll('.btn-op')
const compute = document.querySelector('.equals')
const numbers = document.querySelectorAll('.btn-num')

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
    if (b === '0') {
        alert ("You can't divide by zero!")
        return;
    }
    return a / b
}

let operate = (a, operation, b) => {
    if (operation === '+') 
        console.log(add(a, b))
    else if (operation === '-')
        console.log(subtract(a, b))
    else if (operation === '*')
        console.log(multiply(a, b))
    else if (operation === '/')
        console.log(divide(a, b))
}

clear.addEventListener('click', () => {
    displayNow.textContent = '0'
    displayBefore.textContent = ''
})

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        appendInput(btn.textContent)
    })
})

operators.forEach(btn => {
    btn.addEventListener('click', num => {
        if (displayBefore.textContent === '') {
            displayBefore.textContent +=  displayNow.textContent
            displayBefore.textContent += btn.textContent
        }
    })
})

let appendInput = num => {
    if (displayNow.textContent === '0')
        displayNow.textContent = num
    else 
        displayNow.textContent += num
}