console.log("script loaded");

const container = document.getElementById("container");


const generateBox = () => {
    console.log("generateBox Called");
    
  for (let i = 0; i < 10; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    box.addEventListener("mouseover", function () {
    console.log("box.addEventListener(mouseenter) called");
        
      this.style.backgroundColor = randomHexValue();
    });
    box.addEventListener("mouseout", function (){
      this.style.backgroundColor = "#ffffff";
    });
    container.appendChild(box);
  }
};

const randomHexValue = () => {
  let hex = "";
  let chars= "0123456789ABCDEF"
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return "#" + hex;
};

generateBox();