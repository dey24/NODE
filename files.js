//importing files

const fs = require('fs');

//reading files 


// fs.readFile('./docs/blogs.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log('last line');

//WRITING files

// fs.writeFile('./docs/blogs.txt', 'Hello, World!', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blogs2.txt', 'Hello', () => {
//     console.log("Another file was written")
// }) //writeFile function creates a different file instead of throwing an error


//directories
// if (!fs.existsSync('./assests')){
//     fs.mkdir('./assests', (err) => {
//         if (err) {
//             console.log(err);
//         }
//     console.log("folder created");
// });
    
// }
// else{
//     fs.rmdir('./assests', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }

//deleting files
if (fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file removed')
    })
}