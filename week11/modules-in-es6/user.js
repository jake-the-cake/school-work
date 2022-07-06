export function user(name, age){    
    const obj = {
        name,
        age,
        printName: () => console.log(name),
        printAge: () => console.log(age)
    };
    return obj;
}
