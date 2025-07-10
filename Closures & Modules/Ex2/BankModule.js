
let balance =500;

const deposit = function(amount){
    // console.log("deposit Called");
    balance += amount;
}
const showBalance = function(){
    return balance;
}
module.exports = {deposit,showBalance};