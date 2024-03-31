const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)

console.log(myTotal);

const myTotala = myNums.reduce((acc,currval)=>acc+currval,0)//using arrow function
console.log(myTotala);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2000
    },
    {
        itemName: "py Course",
        price: 2200
    },
    {
        itemName: "cpp Course",
        price: 5000
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc+item.price,0)

console.log(priceToPay);