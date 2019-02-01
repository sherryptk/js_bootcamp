// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, likes = [])
    this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
        
    }
    updateGrade(newGrade) {
        this.grade += newGrade
    }
}

const me = new Student('Andrew', 'Mead', 27, 72, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
me.updateGrade(4)
console.log(me.grade)
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())