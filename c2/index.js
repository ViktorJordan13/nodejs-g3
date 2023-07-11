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
const sortData = arrNums.sort((a, b) => {
    if (a < b) return -1;
    // if (a > b) return 1;
    // if (a === b) return 0;
});
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
        subject: "Sofware"
    },
    getAverage: () => {
        
    }
}