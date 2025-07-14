
const capitalizeFirst  = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
 };

 const toSkewerCase = function(str){
    return str.replaceAll(" ","-");
 };

module.exports = {capitalizeFirst,toSkewerCase};