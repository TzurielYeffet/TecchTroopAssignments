let x = ["food", "item", "location"]
let y = ["cherry", "lightbulb", "Tazmania"]


const isValidSize= function(arr){
    return arr.length === 3;

}
const parseArrayToObject = function(arr1,arr2){
    let result={};
    for(let i =0;i<arr1.length;i++){
        result[arr1[i]]= arr2[i];
    }
    return result;
}






module.exports = {isValidSize,parseArrayToObject}