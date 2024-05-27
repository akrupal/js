//ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const aj = new User("aj", "aj@gmail.com", "123")

console.log(aj.encryptPassword());
console.log(aj.changeUsername());


//behind the scene
//both are same class is syntactic sugar

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const kr = new User("kr", "kr@gmail.com", "123")

console.log(kr.encryptPassword());
console.log(kr.changeUsername());