const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) { 
    cats.shift();
}



function appendCat(name) {
    const newArray = [...cats,name];
    return newArray;
}

function prependCat(name) {
    const newArray = [name,...cats];
    return newArray;
}

function removeLastCat(name) {
    const newArray = cats.slice(0,-1);
    return newArray;
}

function removeFirstCat(name){
    const newArray = cats.slice(1,cats.length);
    return newArray;
}

console.log(removeFirstCat('Sketch'));





