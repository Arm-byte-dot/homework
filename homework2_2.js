const prompt = require("prompt-sync")();
let num = prompt("Enter number: ");
for (let l = 0; l <=10; l++) {
    console.log(`${num}*${l}=${num*l}\n`);
}