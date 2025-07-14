const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]
const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}
const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += `${capitalizeProffesion(person.profession)}`
  summary += `from ${combineCityandCountry(person.city,person.country)}. `
  summary +=  `${capitalize(person.name)} loves to say "${capitalizeChatchPhrase(person.catchphrase)}".`
  return summary
}

//"Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!"."

const getAge = function(age){
    if(age < 21){
        return "Underage";
    }else if(age > 55){
        return "55+";
    }else{
        return age;
    }
}

const capitalizeProffesion=function(profession){
    let capitalizedProffesion ='';
    let stringArr = profession.split(' ');    
    for(word of stringArr){
         capitalizedProffesion += capitalize(word);
         capitalizedProffesion+= " ";
    }
    return capitalizedProffesion;

}

const capitalizeChatchPhrase=function (catchphrase){
    let result ='';
    result = capitalize(catchphrase);
    return result;
    
}

const combineCityandCountry = function(city,country){
    return `${capitalize(city)}, ${capitalize(country)}`;
}

for(person of people_info){
    console.log(getSummary(person));
    
}
