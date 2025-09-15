const prompt = require('prompt-sync')()
let sum = 0
let num =prompt("Enter number: ")
for (let l = 0; l < num; l+=4) {
    sum+=l
    console.log(l)
}
console.log(`sum is ${sum}`)