function printMe(){
    console.log("Hello world");
}

function isEven(number){
    return number % 2 === 0;
}

module.exports = {
    printMe,
    isEven
}