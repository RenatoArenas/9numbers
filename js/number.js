let numbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9];

function randomNumbers(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        return Math.floor(Math.random() * numbers.length);
        
    }
}

function placeNumbers() {
    let numberSaved = [];
    for (let i = 0; i < 9; i++) {
        const numberContainer = document.getElementById(i)
        console.log(numbers);
        let number = numbers.splice(randomNumbers(numbers), 1);
        console.log(number);
        numberContainer.textContent = number[0];
        
        numberSaved.unshift(number[0]);
    }
    console.log(numberSaved);
    numbers = numberSaved;
}
placeNumbers();

