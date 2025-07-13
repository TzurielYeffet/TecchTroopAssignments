
const UniqueArray = require("./UniqueArray");


let item =[1,2,3];

const uniqueStuff = UniqueArray
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
uniqueStuff.add(item);
console.log(uniqueStuff.exists(item) );//returns true

console.log(uniqueStuff.get(2)) //prints "hydrogen"
