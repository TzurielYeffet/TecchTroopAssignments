
function isEven(num){
    return num%2 ===0;
}

function printOddNumbers(arr){
    for(item of arr){
        if(!isEven(item)){
            console.log(item);
            
        }
    }
}

checkExists([1, 2, 3], 2);
function checkExists(arr,num){
    for(item of arr){
        if (item === num){
            return true;
        }
    }
    return false;
}

const obj = calculator={
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    }
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

function increaseByNameLength(money,name){
    console.log(name.length);
    
    return money * name.length
}
function makeRegal(name){
    return "His Royal Highness, ".concat(name);
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


function findThreeDigitsArmstrongNumbers(){
    for(let num=100;num < 1000;num++){
        let digits = num.toString().slice('')
        let sum =0;
        for(let digit of digits){
            sum += Math.pow(Number(digit),3)    
        }
        if(sum === num){
            console.log(sum);
        }
    }
}
 findThreeDigitsArmstrongNumbers()