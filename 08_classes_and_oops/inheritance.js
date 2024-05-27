class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//this will make sure that the constructor of the parent class is called
        //for above usage you dont have to pass it the old way where we used to pass this
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const aj = new Teacher("aj", "aj@gmail.com", "123")

aj.addCourse()
aj.logMe()
const kr = new User("kr")
kr.logMe()

console.log(aj instanceof Teacher);