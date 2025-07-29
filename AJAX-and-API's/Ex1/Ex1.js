//Ex1
fetch(9780307417138)
function fetch(isbn){
$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn,function(response){
     console.log(response)    
     
     let author = response.items[0].volumeInfo.authors[0]
     let title = response.items[0].volumeInfo.title;
          console.log(`${isbn} - ${title} by ${author}`)
          
     });     
}

