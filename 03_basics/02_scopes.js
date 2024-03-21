// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a); // a will give a not defined error since it was defined in if scope
// console.log(b); // b will also give the same error as above
// console.log(c); // value of c will be available even outside the scope so we dont use var

let a = 300 // global scope
if(true){
    let a = 10
    console.log("inner", a); // block scope
}
console.log(a);

function one(){
    const username = "Ajinkya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // not available in this scope
    two()
}
one()

function addOne(num){
    return num+1
}

console.log(addOne(5)); // can be called even before the funcion is created

const addTwo = function(num){ //this is sometimes also called expression
    return num+2
}

addTwo(5) //the the function is declared as an expression it cant be called before it has been created