const findDuplicates = function (ages) {
    // console.log(ages.reduce((counts,age) =>{
    //    counts[age] = (counts[age] || 0) +1;
    //    return counts; 
    // },{} ));
    let obj = ages.reduce((counts,age) =>{
        counts[age] = (counts[age] || 0) +1;
        return counts; 
    },{} );
    console.log(typeof(obj));
    console.log(obj);
    for(element in obj){        
        if(obj[element] > 1){
            console.log(`${element} is duplicate`);
        }
    }
    
}