const {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    deleteStudent,
    editStudent

} = require ("./students");

//IIFE
( async () => {
    try{

        let students = await getAllStudents();
        //console.log(students);
        let student = await getSingleStudent(505);
        //console.log(student);
        //await addNewStudent({ name: "Vangel", surname: "Hristov", year: "2023", id: 0});
        //await editStudent (505, { year: 300} );
        //await deleteStudent(505);



    }catch(err){
        console.log("Error", err);
    }finally{
       console.log("Code has finished executing") 
    }

})();