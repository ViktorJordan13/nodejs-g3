const arr = ["a", 4, "a", 2, "c"];
//arr = [1, 2, 3]; // ne e tocno
//funkcionalno programiranje
//arr.push(1); 
//arr.pop();

//Nizite pocnuvaat od 0.
//arr.lenght ni e 5, a posledniot element (c) ni e na pozicija arr[4]
for (let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
}

for (let i = arr.length-1; i >= 0; i--){
    //console.log(arr[i]);
}

//forEach
const loops = arr.forEach((el) => el);
//forEach ni ja nizata
//console.log('forEach primer', loops[0]);
arr.forEach((element) => {
    //console.log(element);
});

//Find
const res = arr.find((el) => el === "a");
// const res = arr.find((el) => {
//     if(el === "a"){
//         return el
//     }
// });
//console.log(res);
//Idejata na find e da imame nekoj uslov, barame elemnt sto go ispolnuva toj uslov

//Map
// const mapEl = arr.map((el) => {
//     if (el === "a") return el
// });
const mapEl = arr.map((el) => el);
//console.log(mapEl);

//Reduce
const arrNums = [1, 2, 7, 10, 3, 4, 5, 6, 8, 9];
const reducer = arrNums.reduce((acc, curr) => acc + curr);
//console.log("reducer", reducer);

//Sort
// const sortData = arrNums.sort((a, b) => {
//     if (a < b) return -1;
//     // if (a > b) return 1;
//     // if (a === b) return 0;
// });
//console.log(sortData);

//Filter
const filterData = arrNums.filter((el) => el > 5);
//console.log("filteredData:", filterData);

//Objects
const student = {
    grades: [7, 8, 10, 6, 6],
    name: "Test",
    age: 20,
    uni: {
        name: "UKIM",
        faculty: "FINKI",
        subject: "Software"
    },
    getAverage: () => {
        let sum = 0;
        for(let grade of student.grades){
            sum += grade;
        }
        return sum/student.grades.length;
    }
}

//console.log(student.uni.faculty);
//console.log(student.getAverage());

//of we use to read the values
for(let el of arrNums){
    //console.log(el);
}

//in we use to read the indexes
for(let el in arrNums){
    //console.log(el);
}

function isEven(number){
    return number % 2 === 0;
}

function isOdd(number){
    return number % 2 != 0;
}
//console.log(isEven(8));
//console.log(isOdd(5));

//Callback

const callMeBack = () => {
    console.log("Kartickata vi e gotova!");
}

const callbackFunkcija = (fn) => {
    fn();
}

//callbackFunkcija(callMeBack);

function filter (numbers, fn) {
    let results = [];
    for (let num of numbers){
        if (fn(num)){
            results.push(num)
        }
    }
    return results;
}

//console.log(filter([1, 2, 3, 4, 5], isOdd));

//Homework
const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

//Задачи:
//1. Сите студенти од Скопје чие име завршува на буквата а и имаат просек над 7, подредени по име (растечки)
//2. Сите студенти кои имаат просек над 9, не се од Скопје, подредени под просек, но опаѓачки
//3. Првите 3 студенти кои имаат имиња од 5 карактери(букви), подредени под просек.
//4. Градови подредени според групната висина на просек на студентите од нив.
//5. Вкупен просек на студенти чиешто име завршува на буквата а, и на сите останати

const {printMe} = require("./test");
//printMe();

//CRUD (Create, Read, Update, Delete)

const fs = require("fs");
// //npmjs.com
// //const {Validator} = require("node-input-validator");

//Synchronous === blocking
//Asynchronous === non blocking
const fileContents = fs.readFileSync("data.txt", "utf-8");
//console.log(fileContents);

//Callback hell - vgnezduvanje na poveke callback
// function greetMe(callback){
//     if(callback)
//         fn()
//             fn2()
//                 fn3()
// }

//Callbacks - ES5
//Promise - ES6
//Async/Await - ES7

//Promises
//step 1 - funkcija so prazno telo
const fileWrite1 = () => {

}
//step 2 - Promise e objekt, kogo go povikuvame so new keyword, instancirame nov objekt(Promise)
const fileWrite2 = () => {
    return new Promise();
}

//step 3 - vnatre ima anonimna funkcija, kako prv parametar vraka funkcija
const fileWrite3 = () => {
    return new Promise(() => {});
}
//step 4 - isto imame da vraka funkcija, no ovaa ima succes i fail, success i fail parametrite ni se vo ovoj slucaj callbacks

const fileWrite4 = () => {
    return new Promise((success, fail) => {});
}

//step 5 - vnatre zapisuvame nekoj fajl

const fileWrite5 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node JS course", (err) => {
            if(err) console.log(err);
            console.log("File was written succesfully")
        })
    });
}

//step 6 - namesto da pecatime racno (hardcoded), gi povikuvame callback funciite fail() i succes()

const fileWrite6 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node JS course", (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }     
        })
    });
}

//step7 - gi zamenuvame hardkodiranite ime na fajlot i podatocite vnatre so filename i data, gi dodavame kako input parametri isto taka

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }     
        })
    });
}

fileWrite("data.txt", "Casot e zavrsen!");

//fileWrite7("data.txt", "This is a test")
//Promise can be done with then/catch i finally

//then -> when the result of the Promise is successful
//catch -> when the result of the Promise has failed
//finally -> will always be executed

// fileWrite("data.txt", "this is test 1")
// 	.then(() => {                                 // then vnatre prima callback funkcija
// 		console.log("File written successfully");
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 	//this will always be executed
// 	    console.log("Finally executed!");
// 	});


//fileWrite("data.txt", "trala");

//ES 7 async/await with try/catch 