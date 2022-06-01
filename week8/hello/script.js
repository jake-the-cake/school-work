// create random number
const randomInteger = () => {
    return parseInt(Math.random() * 10)
}

const getNumbers = () => {
    let numbers = randomPositiveNegative([randomInteger(),randomInteger()]);
    console.log(numbers[0], numbers[1]);
    if (checkForZeroOrOne(numbers)) {
        return getNumbers();
    }
    else {
        return numbers;  
    }
}

// check for 0 or 1
const checkForZeroOrOne = (numbers) => {
    let containsZeroOrOne = false;
    numbers.forEach((number) => {
        if (number === 1 || number === 0) {
            containsZeroOrOne = true;
        }
    });
    return containsZeroOrOne;
}

// randomly assign negatives
const randomPositiveNegative = (numbers) => {
    numbers.forEach((number, index) => {
        const random = randomInteger();
        if (random % 2 === 0) {
            numbers[index] *= -1;
        }
    });
    return numbers;
}

let randomNumbers = getNumbers();
const result = randomNumbers[0] * randomNumbers[1];

const pageLoaded = () => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('h1').innerHTML = `
        <p>if <span>x = ${randomNumbers[0]}</span> and <span>y = ${randomNumbers[1]}</span></p>
        <p>result <span>x * y =</span> ${result}</p>
    `;
    console.log(`result: ${result}`);
}

window.addEventListener('load', () => {
    setTimeout(pageLoaded, 500);
    //pageLoaded();
});