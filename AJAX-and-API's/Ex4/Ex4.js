//Ex4
const api_key ="amxAoqHIkFl406jWQ4wUcRmbA145quC7"
const url =`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=cheeseburgers&limit=1`

function fetchGIF() {
  $.get(
    `${url}`,
    function (response) {
        console.log(response);
        const gifUrl = response.data[0].embed_url;
        const iframe = $("<iframe>",{
            src:gifUrl,
            width:600,
            height:500,
            frameborder:0,
            allowfullscreen:true
        });



      $("#gif").append(iframe);  
    }
  );
}
fetchGIF()