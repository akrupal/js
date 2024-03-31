const progLang = ["js", "rb", "py", "java"]

progLang.forEach(function (item) {//as it is a callback function it does not need to have a name
    console.log(item);
})

progLang.forEach((item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

progLang.forEach(printMe) //only pass the reference of the function do not execute it

progLang.forEach((item, index, arr)=>{ //it has access to individual item its index and complete array
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName:"Javascript",
        languageFilename:"JS"
    },
    {
        languageName:"Python",
        languageFilename:"Py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);// array of objects
})
//for each wont return any values even if we try to assign something like with a return statement
// const value = myCoding.forEach {
//    return  item
//}