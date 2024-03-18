const myArray = [0, 1, 2, 3, 4]

const myArr2 = new Array(1, 2, 3)
console.log(myArray[1]);

//methods
myArr2.push(6)
myArr2.pop() // removes last
myArr2.unshift(9) //to inseart value at start
console.log(myArr2);

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(3));

console.log("A ", myArray);
const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("C ", myArray);

const marvel = ["thor", "ironamn", "spiderman"]
const dc = ["superman", "flash" , "batman"]

marvel.push(dc) //problamatic will push the entire string as a single object try log

const all_heroes = marvel.concat(dc)

const all_new_heroes = [...marvel, ...dc] //spread operator can be used in place of concat when multiple arrays to be combined

const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const new_another_array = another_arr.flat(Infinity)

console.log(new_another_array);
console.log(Array.isArray("Ajinkya"));
console.log(Array.from("Ajinkya"));
console.log(Array.from({name: "Ajinkya"})); //intresting case if it does not know how to convert it into an array it will return empty array []
