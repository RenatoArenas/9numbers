const numbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9];

function randomNumbers(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        let randomNumber = Math.floor(Math.random() * numbers.length);
        console.log(randomNumber)
        return numbers.splice(randomNumber, 1);
    }
}

function placeNumbers() {
    for (let i = 0; i < 9; i++) {
        const numberContainer = document.getElementById(i)
        
        numberContainer.textContent = randomNumbers(numbers);
    }
}
placeNumbers();