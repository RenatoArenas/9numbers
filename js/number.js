let numbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9];
let numberSaved = [];

function randomNumbers(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        return Math.floor(Math.random() * numbers.length);
        
    }
}

function placeNumbers() {
    for (let i = 0; i < 9; i++) {
        const numberContainer = document.getElementById(i)
        randomNumbers(numbers)
        let number = numbers.splice(randomNumbers(numbers), 1);
        numberContainer.textContent = number[0];
        
        numberSaved.unshift(number[0]);
    }
    numbers = numberSaved
}
placeNumbers();