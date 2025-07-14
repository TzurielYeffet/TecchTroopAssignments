const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = 'BoB'; //or 'Ted';


let newName  = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(newName);

if(!reservations[newName]){
    console.log("You have no reservation");
    reservations[newName] = {claimed:true};
    console.log(reservations);
    
}else if(!reservations[newName].claimed){
    console.log("Wellcome, Bob");
}else{
    console.log("Hmm, someone already claimed this reservation");
}