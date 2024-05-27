const user = {
    username: "ajinkya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Gor user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this //even if we dont write this return statement it is returned by default implicit return
}

const userOne = new User("abc", 12, true)
const userTwo = new User("def", 14, true) //new creates a new instance if we dont use new at both the above places the value will keep changing arrorning to last call

console.log(userOne);
console.log(userTwo);