//object literals
//Object.create //creats singleton

const MySym = Symbol("key1")
const Jsuser = {
    name: "Ajinkya",
    "fullName":"AjinkyaKrupal",
    [MySym]: "key1",
    age: 27,
    location: "Nagpur",
    email: "abc@gmai;.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "tue"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["fullName"]);
console.log(Jsuser[MySym]);

Jsuser.email = "ajinkya@gmail.com"
//Object.freeze(Jsuser) //will not let you change values

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123ab"
tinderUser.name = "Ajinkya"
tinderUser.name = false

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        firstname: "Ajinkya",
        lastname: "Krupal"
    }
}

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj3 = Object.assign({},obj1,obj2) // 1st one is usually considered as the parent/target so all the values will be copied to it
const obj4 = {...obj1, ...obj2} // easier spread methid

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    name:"JS",
    price: 999,
    cousrseInstructor: "abc"
}

const {cousrseInstructor: instructor} = course // instead of course.courseInstructor we can use this

console.log(instructor);