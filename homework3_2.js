const prompt = require('prompt-sync')()
let func = (num) =>{ return num%2==0 ? true :false }
let num = prompt('Enter number: ')

console.log(func(num))