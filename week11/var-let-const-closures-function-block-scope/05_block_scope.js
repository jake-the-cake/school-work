let age = 20;

if (age > 18){
    const message = 'is adult';
    console.log(message);
}

console.log(message); // error, out of scope

// let and const have block scope

// block is anything with { curly brackets }