const myNums = [1,2,3,4,5,6,7,8]

const newNums =  myNums.filter((num)=>num>4)//filter returns values this an be enlosed by ()
// const newNums = myNums.filter((num)=>{
//     num>4 //this wont return anything as we have opened a scope to return here we need to add return before condition
// }) //more info in basics arraow function
console.log(newNums);

//if you want to do it using for each
const new1Nums = []
myNums.forEach((num)=>{
    if(num>4){
        new1Nums.push(num)
    }
})

console.log(new1Nums);

// new function map
const new2num = myNums.map((num)=>num+10)
//const new2num = myNums.map((num)=>{return num+10})//above statement can also be written like this
console.log(new2num);

const new3num = myNums
                .map((map)=>map*10)
                .map((map)=>map+1)
                .filter((map)=> map>=40) // we can go on chaining like this