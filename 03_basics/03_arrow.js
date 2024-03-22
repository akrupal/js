const user = {
    username: "Ajinkya",
    age:27,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this); // in node env here this would be just {} empty object
// but in browser this in global context will have window window is the most global object

// function drink() {
//     let username = "Ajinkya"
//     console.log(this.username); //username is undefined
// }

// const drink = function() {
//     let username = "AJinkya"
//     console.log(this.username); // still undefined
// }

//try arrow function
const drink = () => {
    let username = "Ajinkya"
    console.log(this.username); // still undefined
}

// drink()

const addTwo = (n1, n2) => {
    return n1+n2
}

// const addTwo = (n1, n2) => n1+n2 //implicit return
// const addTwo = (n1, n2) => (n1+n2) //implicit return
// const addTwo = (n1, n2) => ({username: "Ajinkya"})
// if {} is used return needs to be used if () no return required

console.log(addTwo(3,4));