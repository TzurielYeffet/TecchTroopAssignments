const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,   //false, // choose one
    fridge: {
        price: 500,
        works: true, //false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const item = kitchen.fridge["items"][1];
const itemName= item.name;
const itemExpiryDate = item.expiryDate;
const fridgeFixCost = (kitchen.fridge.price)/2

if(hasOven && fridgeWorks){
    console.log(`${kitchen.owner}'s ${itemName} expired ${date-itemExpiryDate} day ago . Weird, considering her fridge works. Luckily, she has an oven to cook the ${itemName} in.` );   
}
if(!hasOven && fridgeWorks){
    console.log(`${kitchen.owner}'s ${itemName} expired ${date-itemExpiryDate} day ago . Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${itemName} in.`);   

}
if(hasOven && !fridgeWorks){
    console.log(`${kitchen.owner}'s ${itemName} expired ${date-itemExpiryDate} day ago . Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixCost} to fix the fridge.`);   
}
if(!hasOven && !fridgeWorks){
    console.log(`${kitchen.owner}'s ${itemName} expired ${date-itemExpiryDate} day ago . Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixCost} to fix the fridge.`);   

}
