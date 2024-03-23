//immediately invoked function expression

(function abc(){ //this is named iife
    console.log("Connecting to DB");
})();

//used to remove global scope pollution of variables
//()() 1st paranthesis is defination and 2nd one is for execution
//these functions dont know where to stop so we need to add ; at the end
// try removing ; form fisrt and it will give error

( (name) => {
    console.log(`DB2 ${name}`);
})('Ajinkya')