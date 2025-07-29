//Ex5
const api_key = "amxAoqHIkFl406jWQ4wUcRmbA145quC7";

console.log("script loaded");

$(".btn").on("click", function () {
  console.log("button clicked");

  const input = $("#input").val().trim();
  console.log(input);

    $("#gif iframe").remove();

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${input}&limit=1`;
  $.get(`${url}`, function (response) {
    console.log(response);
    const gifUrl = response.data[0].embed_url;
    const iframe = $("<iframe>", {
      src: gifUrl,
      width: 600,
      height: 500,
      frameborder: 0,
      allowfullscreen: true,
    });

    $("#gif").append(iframe);
  });
});
