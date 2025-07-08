const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for( let i=0; i < names.length;i++){
    people.push({name:names[i],age:ages[i]});
}
console.log(people);

for(let person of people){
    console.log(`${person.name} is ${person.age} years old`);
    
}

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]
for(let post in posts){    
    if(posts[post].id === 2)
        posts.splice(post,1)
}
console.log(posts);