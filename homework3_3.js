const prompt = require('prompt-sync')()
let func = (num) =>{  
    let sum = 1
    for (let i = 1; i < num; i++) {
        if(i%4==0){
            sum*=i
        }
    } 
    return sum
}
let num = prompt('Enter number: ')
console.log(func(num))