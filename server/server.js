console.log("Hello world");
//console.log(global);

const os = require('os');
const path = require('path')
const {add, substract, multiply, divide} = require('./math')

console.log(add(2,3))
console.log(substract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/