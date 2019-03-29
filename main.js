const randome = require('./random');

const currentDate = new Date();
const hours = currentDate.getHours()<10? `0${currentDate.getHours()}` : currentDate.getHours();
const minutes = currentDate.getMinutes()<10? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
const day = currentDate.getDate()<10? `0${currentDate.getDate()}` : currentDate.getDate();
const month = currentDate.getMonth()<10? `0${currentDate.getMonth()}` : currentDate.getMonth();
console.log(`Date: ${hours}:${minutes}  ${day}.${month}.${currentDate.getFullYear()}`)
console.log('File:', process.argv[1]);

console.log('Random number: ', randome(1,10))