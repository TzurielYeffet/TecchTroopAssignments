
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