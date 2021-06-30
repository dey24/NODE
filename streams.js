const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt')
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK ----');
//     console.log(chunk);
//     console.log('\n--NEW CHUNK--\n');
//     console.log(chunk)
// })

//piping
readStream.pipe(writeStream);