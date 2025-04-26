function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Gjeneron nje numer random nga 1 deri ne 100
    document.getElementById('randomNumber').innerText = `Numer Random: ${randomNumber}`; // Shfaq numrin ne elementin p
}