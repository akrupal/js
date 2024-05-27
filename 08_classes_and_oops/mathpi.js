const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const aj = {
    name: 'Ajinkya',
    age: 27,
    isAvalibale: true,

    doWork: function(){
        console.log("doWork");
    }
}

console.log(Object.getOwnPropertyDescriptor(aj,"name"));

Object.defineProperty(aj, 'name', {
    writable: false,
    enumerable: false //if this is false you wont be able to see this object when you loop through the object below
})

console.log(Object.getOwnPropertyDescriptor(aj,"name"));

for (let [key,value] of Object.entries(aj)) {
    if(typeof value !== 'function'){//if a function is also available but we dont want to list it here
        console.log(`${key} : ${value}`);
    }
}