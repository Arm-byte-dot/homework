const prompt = require('prompt-sync')()
let func = (num1,num2) =>{ return num1*num2 }
let num1 = prompt('Enter first number: ')
let num2 = prompt('Enter second number: ')
console.log(`${num1}*${num2}=${func(num1,num2)}`)