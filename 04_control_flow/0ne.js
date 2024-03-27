if (condition && condition) {

}  else if (condition || condition) {

} else {

}

if (condition) console.log("test"); // this is called implicit scope
// we can write mutiple lines in the above implicit scope by replacing ; with ,
// just remember to put ; where the scope needs to end
// the above thing is a very bad practice and not to be used

switch (key) {
    case value:
        
        break;

    default:
        break;
}

//truthy and falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN
//eerything other than aboe values are truthy
// some confusing values that are truthy "0", 'false', "", [],{}, funtion(){}
//false == 0
// false == ''
// '' == 0
// these 3 return true

// to check if array is empty use
if(email.length === 0){
    console.log("arrayis emty")
}

//for objects
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalascing Operator (??): null undefined

let val1;
val1 =  5 ?? 10 // 1st value assigned
val1 = null ?? 10 // if the 1st is null 2nd value is assigned
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20  // if multiple operators are used the 1st correct value is assigned

console.log(val1);

//ternary oerator
// condition ? true : false

const price = 80

price > 100 ? console.log("price gt 100") : console.log("price lt 100")