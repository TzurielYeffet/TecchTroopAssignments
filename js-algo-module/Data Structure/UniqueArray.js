const items = {};

const add = function (item) {
  if (!items.hasOwnProperty(item)) {
    items[item] = item;
  }
};
const showAll = function () {
  for (let item in items) {
    console.log(item);
  }
};

const exists = function (item) {
  return items.hasOwnProperty(item);
};

const get = function(num){
    console.log(items);
    
    let keys =Object.keys(items);
    console.log(keys);
    if(keys[num]===undefined){
        return -1;
    }else{

        return keys[num];
    }
    
}

module.exports = {add,get,showAll,exists};