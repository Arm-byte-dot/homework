let sum = 1
for (let l = 6; l < 60; l++) {
    if(l%6==0){
        sum+=l
        console.log(l)
    }
}
console.log(`sum is ${sum}`)