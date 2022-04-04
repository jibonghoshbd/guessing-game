// finding elements
const cardBody = document.querySelector('.card-body')
const form = document.querySelector('form')
const inputNumebr = document.getElementById('guessingNumber')
const submitBtn = document.getElementById('check-result')
const resultText = document.querySelector('.resultText')
const remainingAttempts = document.querySelector('.remainingAttempts')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('hello')
});