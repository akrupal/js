let myName = "Ajinkya     "

// console.log(myName.trueLength);
//create a method trueLength
let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

//everything in javascript is an object in the end
//if I do this
Object.prototype.ajinkya = function(){
    console.log(`ajinkya is present in all objects`);
}
// this will be available to all arrays function string everything

heroPower.ajinkya()
myHeroes.ajinkya()

//prototypal inheritance old method
const User = {
    name: "AJ",
    email: "AJ@GMAIL.COM"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport //TASupport will be able to access properties of TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//now to the main objective
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"Krupal".trueLength()