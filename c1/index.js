//Basic console logs to explain what is interpreted language
console.log("Izvrsi go ova vtoro");

console.log("Dobredojdovte vo predavanjata po Node.js!");

//Call
function hello(){
    console.log("Hello World");
}

//hello();

//Reference

var thisIsAReference = hello();

//Variables

//var - refers to global object or value

//const - it is used when we want to declare a constant value, is block scoped, cannot change primitive types

const testArray = [1, 2 ,3];
//console.log(testArray);
testArray.pop();
//console.log(testArray);

//let - block scoped, we can change both primitive and complex types

//Functions

//Anonymous function
() => {} //because it has no name

//Normal/Basic function
function normal(){
    console.log("This is an example of a normal function");
}
normal();

//Fat Arrow function
let arrowFunction = () => {
    console.log("This is an example of a fat arrow/arrow function");
}
arrowFunction();

//Function declaration/ declarative function
const functionDeclaration = function () {
    console.log("This is an example of a declaration function")
}
functionDeclaration();

//Task

//Normal/Basic function
function normal(){
    return 7;
}
//console.log(normal());

//Fat Arrow function
let arrowFunctionReturn = () => {
    return 8;
}
//console.log(arrowFunctionReturn());

//Function declaration/ declarative function
const functionDeclarationReturn = function () {
    return 9;
}
//console.log(functionDeclarationReturn());

//Bonus - calculator function with return and if else

function calculatorIfElse (operation, num1, num2){

    if(operation === 'multiply'){
        return num1 * num2;
    }
    if(operation === 'divide'){
        return num1 / num2;
    }
    if(operation === 'sum'){
        return num1 + num2;
    }
    if(operation === 'difference'){
        return num1 - num2;
    }
    else {
        return "Unsupported operation";
    }
}

// console.log(calculatorIfElse('multiply', 5, 4));
// console.log(calculatorIfElse('divide', 5, 4));
// console.log(calculatorIfElse('sum', 5, 4));
// console.log(calculatorIfElse('difference', 5, 4));
// console.log(calculatorIfElse('logarhitm', 5, 4));

//Bonus bonus function - calculator function with return and using switch

function calculatorSwitch(operation, num1, num2){
    let result;
    switch(operation){
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'sum':
            result = num1 + num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        default:
            result = "Unsupported operation";
    }
    return result;
}

console.log(calculatorSwitch('multiply', 5, 4));
console.log(calculatorSwitch('divide', 5, 4));
console.log(calculatorSwitch('sum', 5, 4));
console.log(calculatorSwitch('difference', 5, 4));
console.log(calculatorSwitch('logarhitm', 5, 4));

//Podgotovki za naredno predavanje
var module = require('fs');