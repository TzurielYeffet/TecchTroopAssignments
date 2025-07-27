import AutoCompleteTrie from "../Trie/AutoCompleteTrie.js";
console.log("scrips loaded");

const addWordButton = document.getElementById("btn");
const trie = new AutoCompleteTrie();
const container = document.getElementById("container");
const addWordDiv = document.querySelector(".add-word");
addWordButton.addEventListener("click", () => {
  const input = document.getElementById("word");
  const value = input.value.trim();
  if (!value) {
    handleMessage("Error", value);
    return;
  }

  if (trie.addWord(value)) {
    handleMessage("Success", value);
    input.value = "";
    updateWordCount();
  }
  else{
    handleMessage("Error",value)
  }
});

function updateWordCount() {
  const counter = document.getElementById("counter");
  counter.innerHTML = AutoCompleteTrie.count;
  console.log(AutoCompleteTrie.count);
}

const input = document.getElementById("suggestion");
let value = "";
input.addEventListener("input", (event) => {
  value = event.target.value;
  SuggestionsBox(value);
});
const SuggestionsBox = (value) => {
  const container = document.getElementById("suggestion-div");
  const list = document.getElementById("suggestion-list");
  list.innerHTML = "";

  if (value.length > 0) {
    container.style.opacity = "1";

    let predictionArr = trie.predictWords(value);
    // console.log(predictionArr);

    predictionArr.forEach((item) => {
      console.log(item);
      const listItem = document.createElement("li");
      listItem.innerHTML = `<mark>${item.word.slice(
        0,
        value.length
      )}</mark>${item.word.slice(value.length)}`;
      list.appendChild(listItem);
    });
  } else {
    container.style.opacity = "0";
  }
};

function handleMessage(state, value) {
  let message = "";
  const messageContainer = document.createElement("div");
  addWordDiv.insertAdjacentElement("afterend", messageContainer);
  messageContainer.className = "message-container";
  messageContainer.innerHTML = "";
  let messageDiv = document.createElement("div");

  if (state === "Success") {
    message = `✓ Added '${value}' to dictionary`;
    messageDiv.innerHTML = message;
    messageDiv.style.backgroundColor = "#c6f6d5";
  }
  if (state === "Error") {
    messageDiv.style.backgroundColor = "#fee6e6";
    messageDiv.style.borderLeft = "4px solid #e56969"
    if(value.length ===0){
      message = `✗ Cannot add empty word`;
    }else{
      message = `✗ Word already exists in dictionary`
    }
  }
  // messageDiv.style.width = "fit-content";
  messageDiv.className = "message";
  messageDiv.innerHTML = message;
  messageContainer.appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.classList.add("show");
  }, 10);

  setTimeout(() => {
    messageDiv.classList.add("fade-out");
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.parentNode.removeChild(messageDiv);
      }
    }, 300);
    messageContainer.parentNode.removeChild(messageContainer);
  }, 3000);
}
// const exit = false;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const trie = new AutoCompleteTrie();
// console.log(
//   "\n=== AutoComplete Trie Console ===\n\n\n Type 'help' for commands\n\n"
// );
// const getInput = function () {
//   rl.question("> ", (input) => {
//     const [command, ...rest] = input.trim().split(" ");
//     const value = rest.join(" ").toLowerCase();
//     switch (command) {
//       case "add":
//         trie.addWord(value);
//         console.log(`✓ Added '${value}' to dictionary`);
//         break;
//       case "find":
//         let exists = trie.findWord(value);
//         if (exists) {
//           console.log(`✓ '${value}' exists in dictionary`);
//         } else {
//           console.log(`✗ '${value}'  not found in dictionary`);
//         }
//         break;
//       case "help":
//         console.log(
//           "Commands:\n add <word>      - Add word to dictionary\nfind <word>     - Check if word exists\ncomplete <prefix> - Get completions\nhelp           - Show this message\nexit           - Quit program"
//         );
//         break;
//       case "complete":
//         let result = trie.predictWords(value);
//         if (result.length > 0) {
//           console.log(
//             `Suggestions for ${value}:` +
//               result.map(({ word, frequency }) => `${word} (${frequency})`)
//           );
//         }
//         break;

//       case "use":
//         let freq = trie.use(value);
//         console.log(`Incremented usage for '${value}' (now ${freq});`);

//         break;
//       case "exit":
//         rl.close();
//         console.log("Goodbye");
//         return;
//       default:
//         console.log(
//           `${value} is not a recognaized command type 'help' for more options`
//         );
//     }

//     getInput();
//   });
// };
// getInput();
