function delkeys(obj) {
    for(let key in obj){
        if(obj[key] === undefined){
            delete obj[key]
        }
    }
    return obj;
}
let obj = {
	key1: 'hello',
	key2: undefined,
	key3: 123,
	key4: undefined
}


console.log(delkeys(obj))