const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

// console.log(square(5))

const people = [{
    name: 'Sherry',
    age: 34
}, {
    name: 'Walnut',
    age: 8
}, {
    name: 'Mary',
    age: 68
}]

const under30 = people.filter((person) => person.age < 30)
// console.log(under30)

const age8 = people.filter((person) => person.age === 8)
// const age8Names = age8.forEach((person) => console.log(person.name))

const walnut = people.find((person) => person.age === 8)
console.log(walnut.name)