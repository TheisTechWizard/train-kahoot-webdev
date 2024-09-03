// Countdown timer logic
let timerElement = document.getElementById('gameTimer');
let timeLeft = 30;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
    } else {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00";
        // Timer ends, you can add any additional logic here
    }
}

timerElement.textContent = formatTime(timeLeft); // Initialize the timer display
let timerInterval = setInterval(countdown, 1000);
