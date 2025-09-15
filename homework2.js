const prompt = require("prompt-sync")();
let message;
let login = prompt();
login == 'Employee' ? message ='Hi' : login == 'Директор' ? message = "Hello" : login == "" ? message="No login" : message = ''
console.log(message)