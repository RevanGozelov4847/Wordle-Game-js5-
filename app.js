const wordList = ["apple", "banana", "orange", "grape", "kiwi", "melon", "peach", "pear", "plum", "strawberry"];
const maxAttempts = 5;

let secretWord;
let attemptsRemaining;

function startGame() {
    secretWord = getRandomWord();
    attemptsRemaining = maxAttempts;
    console.log("Secret word:", secretWord);
}

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();

    if (userGuess === secretWord) {
        displayResult(true, "Congratulations! You guessed the correct word.");
    } else {
        attemptsRemaining--;
        if (attemptsRemaining > 0) {
            displayResult(false, `Wrong guess. ${attemptsRemaining} attempts remaining.`);
        } else {
            displayResult(false, `Sorry, you're out of attempts. The correct word was ${secretWord}.`);
            startGame(); 
        }
    }
}

function displayResult(isCorrect, message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;

    if (isCorrect) {
        resultElement.style.color = "green";
        startGame(); 
    } else {
        resultElement.style.color = "red";
    }

    document.getElementById("guessInput").value = "";
}

startGame();
