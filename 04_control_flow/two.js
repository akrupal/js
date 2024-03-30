//for of
//used for arrays
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(greet);
}

//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "Ameria")
map.set('FR', "France")
//if you again try to give map.set('IN', "India")
// that wont wort it will only take unique entries
//also order is remembered

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

//object
const myObject = {
    'game1': 'NFS',
    'game2': 'GOW'
}

//if we try for of with this object it wont work because objects are not iterable

const newObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"
}

for (const key in newObject) {
    console.log(key, "for",newObject[key]);
}

const progLang = ["js", "rb", "py", "java"]

for (const key in progLang) {
    console.log(key);//using for in in an array gives you index
}

for (const key in map) {
    console.log(map);//this does not give any output as map is not iterable
}