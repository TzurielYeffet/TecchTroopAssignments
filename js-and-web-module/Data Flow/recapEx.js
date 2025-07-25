const posts = [
  {
    name: "UJ",
    text: "UJ Post",
  },
  {
    name: "BFF",
    text: "BFF Post",
  },
  {
    name: "Teacher",
    text: "Teacher Post",
  },
];

const render = function () {
  const container = document.createElement("div");
  const btn = document.getElementById("btn");
  btn.insertAdjacentElement("afterend", container);
  const renderPosts = () => {
    container.innerHTML = "";
    posts.forEach((post,index) => {
      let p = document.createElement("div");
      p.innerHTML = `<strong>${post.name}</strong> : ${post.text}`;
      container.appendChild(p);

      p.addEventListener("click",()=>{
        posts.splice(index,1)
        renderPosts();
      })
    });
  };

  renderPosts();

  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const text = document.getElementById("wish").value;
    if (!name || !text) return;
    posts.push({ name, text });
    renderPosts();
    document.getElementById("name").value = "";
    document.getElementById("wish").value = "";
  });
};
render();
