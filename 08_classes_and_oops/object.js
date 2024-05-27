function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log();

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.incriment = function(){
    this.score++
}

//everytime the prototype keyword is not needed it will automatically inject at the right place
createUser.printMe = function(){
    console.log(`score is ${this.score}`);
}

//if new keyword is not used the object wont be able to access the functions written outside function createUser
//new keyword kind of calls the constructor here
const aj = new createUser("aj",20)
const kr = createUser("kr",23)

aj.printMe()