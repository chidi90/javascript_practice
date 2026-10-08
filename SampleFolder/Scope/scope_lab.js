// Global Scope
var globalVar = "i'm a global variable";
let globalLet = "i'm also global, but scoped with let";
const globalConst = "i'm a global constant";


{
// Block Scope
var blockVar = "i'm a block-scoped var";
let blockLet = "i'm a block-scoped let";
const blockconst = "i'm a block-scoped const";
}

console.log(globalVar); // Output: "i'm a global variable"
console.log(globalLet); // Output: "i'm also global, but scoped with let"
console.log(globalConst); // Output: "i'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var ";
    let functionLet = "I'm a block-scoped";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError 