const prompt = require('prompt-sync')()
let func = (num1,num2,num3) =>{
    if((num1%2==0 && num2%2==0) || (num2%2==0 && num3%2==0)|| (num1%2==0 && num3%2==0)){
        return num1+num2+num3
    }else{
        return num1*num2*num3
    }
}
let num1 = +(prompt('Enter first number: '))
let num2 = +(prompt('Enter second number: '))
let num3 = +(prompt('Enter third number: '))
console.log(func(num1,num2,num3))