const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}


const checkReservation  = (event)=>{
    event.preventDefault();
    const name = document.getElementById("username")
    console.log(name.value);
    addElement(name.value);
    
}

const notifyUser=(name)=>{
    if(!reservations[name]){
        return "You have no reservation"
    }
    if(!reservations[name].claimed){
        return `Welcome, ${name}`
    }else {
       return  "Hmm, someone already claimed this reservation"
    }
}

const addElement = (name)=>{
    const form = document.getElementById('form');
    form.style.display = "none";
    const header = document.createElement("h2");
    header.innerHTML = notifyUser(name)
    header.setAttribute('class','ch2');
    document.body.appendChild(header)
}