// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

// finding elements
const cardBody = document.querySelector('.card-body')
const form = document.querySelector('form')
const guessingNumber = document.getElementById('guessingNumber')
const submitBtn = document.getElementById('check-result')
const resultText = document.querySelector('.resultText');
const lostWonMessage = document.createElement("p");
const remainingAttempts = document.querySelector('.remainingAttempts')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    attempts++;
    if (attempts === 5) {
        guessingNumber.disabled = true;
        submitBtn.disabled = true;
    } if (attempts < 6) {
        const guessNumber = parseInt(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts
            }`;
    }
    guessingNumber.value = ''
});

const checkResult = guessingNumber => {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

const getRandomNumber = limit => {
    return Math.floor(Math.random() * limit) + 1;
}