class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ //wont be available to the created instance object
        return `123`
    }
}

const aj = new User("aj")
// console.log(aj.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iph@gmail.com")