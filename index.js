const p1 = {
    firstName : 'darshan',
    lastName: 'jadhav',
    fullName: function(location, number){
        return this.firstName +' '+ this.lastName +' '+ location +' '+ number
    }
}

const p2 = {
    firstName : 'd',
    lastName: 'j',
}

// call method
console.log(p1.fullName.call(p2,'bangalore', 456))

// apply method
console.log(p1.fullName.apply(p2, ['gulbarga', 109]))

// bind method
const result = p1.fullName.bind(p2,'mumbai','123')
console.log(result())