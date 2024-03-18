let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//the time value is always in milliseconds to convert it to sec
console.log(Math.floor(Date.now()/1000));

