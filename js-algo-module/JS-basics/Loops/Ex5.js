const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(let item in dictionary){
    let letter = dictionary[item][0].charAt(0);
    console.log(`Words that begin with ${letter}:`);
    for(let i in dictionary[item]){
        console.log(`${dictionary[item][i]}`);
        
    }
    
}