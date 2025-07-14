let customerType = "regular";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here

if(customerType ==="VIP"){
    console.log(`${purchaseAmount * 0.8}`);
}
if(customerType ==="premium"){
    if(dayOfWeek === 0 || dayOfWeek === 6)
        console.log(`${purchaseAmount * 0.85}`);
    else{
        console.log(`${purchaseAmount * 0.9}`);
    }
}
if(customerType === "regular"){
    purchaseAmount > 100 ? console.log(`${purchaseAmount *0.9}`) : purchaseAmount >50 ? console.log(`${purchaseAmount*0.95}`) : console.log(`${purchaseAmount}`);
}
        
