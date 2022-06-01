// create random numbers
const randomA = parseInt(Math.random() * 100);
const randomB = parseInt(Math.random() * 10);
const result = randomA * randomB;


const pageLoaded = () => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('h1').innerHTML = `
        <p>if <span>x = ${randomA}</span> and <span>y = ${randomB}</span></p>
        <p>result <span>x * y =</span> ${result}</p>
    `;
    console.log(`result: ${result}`);
}

window.addEventListener('load', () => {
    setTimeout(pageLoaded, 500);
});