// create random number
const randomInteger = (multiplier) => {
    return parseInt(Math.random() * multiplier)
}

// return 2 numbers
const getNumbers = () => {
    const [ num1, num2 ] = randomPositiveNegative([randomInteger(100),randomInteger(10)]);
    const numbers = [num1,num2];
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
        const random = randomInteger(10);
        if (random % 2 === 0) {
            numbers[index] = number * -1;
        }
    });
    return numbers;
}

// remove loader screen
const killLoader = () => {
    document.getElementById('loader').style.display = 'none';
}

// assemble injectable content
const displayResults = () => {
    const [ num1, num2 ] = getNumbers();
    const result = num1 * num2;

    const inputLine = document.createElement('p');
    const outputLine = document.createElement('p');
    const numA = document.createElement('span');
    const numB = document.createElement('span');
    const resultRtn = document.createElement('span');

    numA.innerText = `x = ${num1}`;
    numB.innerText = `y = ${num2}`;
    resultRtn.innerText = result;

    inputLine.innerHTML = `if ${numA.outerHTML} and ${numB.outerHTML}`;
    outputLine.innerHTML = `then x * y = ${result}`;

    return inputLine.outerHTML + outputLine.outerHTML;
}

// main page load function
const pageLoaded = () => {
    document.getElementById('root').innerHTML = displayResults();
    killLoader();
}

// listen for page load
window.addEventListener('load', () => {
    //setTimeout(pageLoaded, 500);
    pageLoaded();
});