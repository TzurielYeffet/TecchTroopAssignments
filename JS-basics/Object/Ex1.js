let p1 = {
    name : "Jill" ,
    age : 24,
    city : "London"
}

let p2 = {
    name : "Robert",
    age : 24,
    city: "Paris"
}
if(p1.city === p2.city){
    console.log(`${p1.name} wanted to date ${p2.name}`);
}else{
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`)
}