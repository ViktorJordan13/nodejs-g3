const fileOperations = require('./homeworkFileOperations');

//1 and 4
const read = async () => {
    try{
        //Read data from the file
        const data = await fileOperations.read("homeworkExample.txt");
        console.log(data);


    }catch(error){
        console.error(error);
    }
}

//3
// ( async () => {
//     try{

//         await fileOperations.write("homeworkExample.txt", "testWrite");

//         // const data = await fileOperations.read("homeworkExample.txt");
//         // console.log(data);
//         read();

//     }catch(error){
//         console.error(error);
//     }

// })();


//2 and 4

( async () => {
    try{

        await fileOperations.appendFile("homeworkExample.txt", "testAppend");

        read();

    }catch(error){
        console.error(error);
    }

})();

