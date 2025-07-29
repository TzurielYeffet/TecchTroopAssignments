//Ex2
fetch("title", "How to Win Friends and Influence People");
function fetch(query, data) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}:` + data,
    function (response) {
      console.log(response);

      let author = response.items[0].volumeInfo.authors[0];
      let title = response.items[0].volumeInfo.title;
      if (query === "title") {
        console.log(`${title} - by ${author}`);
      } else {
        console.log(`${data} - ${title} by ${author}`);
      }
    }
  );
}
