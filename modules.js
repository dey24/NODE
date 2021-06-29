//require imports the required file into the current file.

const xyz = require('./people');

console.log(xyz.people, xyz.ages)

const os = require('os');

console.log(os.platform(), os.homedir());