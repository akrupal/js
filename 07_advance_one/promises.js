const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//Promise consumed wont be called without this line
    }, 1000)
})
promise1.then(function(){
    console.log("Promise consumed");
})

//shorter way to write the above code
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async2 task is complete');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise2 consumed");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "akrupal", email:"abc@gmail.com"})
    },1000)
}).then(function(user){//parameter passed in resolve can be accessed in then function
    console.log(user);
})

//.then chaining
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "akrupal", email:"abc@gmail.com"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promise4.then((user)=> {
    console.log(user);
    return user.username // the value that is returned from here goes to the next chain if you try to allot this to a variable it wont be available there
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))



const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "js", email:"abc@gmail.com"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)    
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
//async await does not handle error by itself
//reject means error code

consumePromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/akrupal') //network call needs time so await
        const data = await response.json() //json conversion will also take time so added await
        console.log(data);
    } catch (error) {
        console.log("error: ", error);
    }
}

getAllUsers()

//same exapmle using .then
//await is not needed in .then because .then only works after the 1st operation is done

fetch('https://api.github.com/users/akrupal')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))