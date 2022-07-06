function update(obj){
    // update age
    obj.age = 21;
}

const obj = {
    name: 'peter',
    age: 18
}

// by reference
obj.age = 19;
console.log(obj);
update(obj);
console.log(obj);

// by value
obj.age = 19;
var copy1 = Object.assign({}, obj);
var copy2 = {...obj};
update(copy1);
update(copy2);
console.log(`copy1: ` + JSON.stringify(copy1));
console.log(`copy2: ` + JSON.stringify(copy2));
console.log(obj);