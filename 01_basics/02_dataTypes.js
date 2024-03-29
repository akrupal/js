"use strict"; // treats all JS code as newer version
//alert(3+3) // will work in browser but not here

// number => 2 to pow 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value (type is object)
// undefined
// symbol => uniqueness
// object

console.log(typeof 2);

// primitive datatype
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // both will be different despite having the same symbol

// reference type or non primitive
// arrays, objects, functions

const abc = ["qwfre", "fvr3wqfwea", "bhujk"];
let myObj = {
    name: "Ajinkya",
    age: 27,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);


// memory

// stack (primitive) heap(non primitive)
// stack copy
// heap reference of original value

let a = "abcd"
let b = a

a = "cdef"

console.log(a)
console.log(b) // string are primitive datatypes so copy is passed

let userOne = {
    email: "abc@gmail.com",
    upi: "aj123@asd"
}

let userTwo = userOne

userTwo.email = "ajinkya@gmail.com"

console.log(userOne);