function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    // SetUsername(username)//if the call is made like this all references are lost as soon as it exits this function as the execution context gets destroyed
    //correct call is
    // SetUsername.call(username)//this will only hold references but still this will be used of SetUsername and wont be set for createUser
    SetUsername.call(this,username)//context passing


    this.email = email
    this.passeword = password
}

const aj = new createUser("aj","aj@google.com","123")
console.log(aj);