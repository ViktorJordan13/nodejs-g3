const {read, write} = require("./io");

//CRUD (Create, Read, Update, Delete)

//Read(GET method)
const getAllStudents = async() => {
    return await read();
}

const getSingleStudent = async(id) =>{
    const student = await read();
    return student.find((s) => s.id === id);
}

//Create(POST method)
const addNewStudent = async(newStudentData) => {
    let students = await read(); //students is an array
    students.push(newStudentData) //the new student data is added at the end of the array
    await write(students);
}

//Delete (DELETE method)
const deleteStudent = async(studentId) => {
    let students = await read();
    //pop - for removing
    students = students.filter((student) => student.id !== studentId);
    await write(students);
}

//Update (PUT, PATCH method)
const editStudent = async (studentId, studentNewData) => {
    let students = await read();
    students = students.map((student) => {
        if(studentId === student.id){
            return {
                ...student,
                ...studentNewData,
            };
        }
        return student; //zatoa sto sekoj student nema da bide ednakov na momentalniot index, i ke ni vrati null za ostanatite
    });
    await write(students);
};

//Spread operator
const student = {
    name: "Trajce",
    age: 23,
    faculty: "FIKT"
}

const studentNewData = {
    gender: "Male",
    graduationYear: 2022,
    age: 25
}

const updatedStudent = {
    ...student,
    ...studentNewData
}

//console.log(updatedStudent);
module.exports = {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    deleteStudent,
    editStudent
}

//Task
//1. create a new file (manually) and read the data in it
//2. create a new file through code and write "I finished the task" in it
//3. do the same but with writing the functions in a module, and then importing them in the main function
//BONUS
//Do it asyncronously (using async)
