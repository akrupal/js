class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const aj = new User("aj@gmail.com", "abc")
console.log(aj.password);

//old method get set through property
function User(email, password){
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const aj = new User("aj@gmail.com", "aj")
console.log(aj.email);

//object based
const User = {
    _email: 'aj@gmail.com',
    _password: 'abc'

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }
}

const kr = Object.create(User)
console.log(kr.email);