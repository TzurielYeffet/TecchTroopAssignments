
const add = function(a, b){
    return a + b
}

const calculateHyp = function(a,b){
    return Math.sqrt(a*a+b*b);
}


const clearLowPriority  = function(objArr){
    return objArr.filter(obj => obj.priority == "HIGH")
}

module.exports = {add,calculateHyp,clearLowPriority}