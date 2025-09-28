let person = {
    name: "Aren",
    age: 16,
    city: 'Agarak'
}

person.isStudent = true
delete person.city

console.log("age" in person) 