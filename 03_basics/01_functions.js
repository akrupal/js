function addTwoNumbers(n1, n2) {
    console.log(n1+n2);
}

addTwoNumbers(3,4)

function loginUserMessage(username = "aj"){
    if(!username){
        console.log("please enter username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ajinkya"));

function calcCartPrice(...num1){ //can take in any number of values
    return num1
}

console.log(calcCartPrice(200,300,400));

const user = {
    username:"Aj",
    age: 27
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user)

handleObject({
    username:"abc",
    age: 3
})