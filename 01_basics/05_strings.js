const name = "Ajinkya"
const langCount = 5

// console.log(name + " knows " + langCount + " languages") // old way

console.log(`Hello my name is ${name} and my language count is ${langCount}`); // new better way

//another way of defining string
const gameName = new String('godofwar') // gives key value pairs and some more additional inbuild functionality with strings

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "     Ajinkya     "
console.log(newStringOne.trim());

const url = "ajk%20ased"
console.log(url.replace('%20', '-'));

console.log(url.includes('aj'));

console.log(gameName.split('o'));