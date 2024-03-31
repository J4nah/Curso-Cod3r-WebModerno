Object.prototype.attr0 = 'Z'
const avo = {
    attr: 'A'
}

const pai = { 
    __proto__: avo, attr2: 'B'
}

const filho = {
    __proto__: pai, attr3: 'C'
}

console.log(filho.attr0);
console.log(filho.attr);