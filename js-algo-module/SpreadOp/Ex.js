//Ex1

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]
let [rabbit,...cleandveg]= vegetableArr;
meatArr=[rabbit,...meatArr];
vegetableArr = cleandveg;

//Ex2

var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel'}
let passport = {...firstPiece,...seoncdPiece}

//Ex3

let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

  for(emp of employeesArr){
        let age = emp.age ?? null;
        let id  = emp.id ?? null
        if(age ===null  || id ===null ){
            console.log(`${emp.name} have missing data`);
            
        }
  }