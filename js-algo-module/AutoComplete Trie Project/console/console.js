// Display a welcome message
// Show available commands:
// add <word> - Add a word to the dictionary
// find <word> - Check if word exists
// complete <prefix> - Show all completions for prefix
// help - Show commands
// exit - Quit the application
// Handle user input in a loop
// Provide clear feedback for each operation
const readline = require("readline");
const AutoCompleteTrie = require("../Trie/AutoCompleteTrie");

const exit = false;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const trie = new AutoCompleteTrie();
console.log(
  "\n=== AutoComplete Trie Console ===\n\n\n Type 'help' for commands\n\n"
);
const getInput = function () {
  rl.question("> ", (input) => {
    const [command, ...rest] = input.trim().split(" ");
    const value = rest.join(" ").toLowerCase();
    switch (command) {
      case "add":
        trie.addWord(value);
        console.log(`✓ Added '${value}' to dictionary`);
        break;
      case "find":
        let exists = trie.findWord(value);
        if (exists) {
          console.log(`✓ '${value}' exists in dictionary`);
        } else {
          console.log(`✗ '${value}'  not found in dictionary`);
        }
        break;
      case "help":
        console.log(
          "Commands:\n add <word>      - Add word to dictionary\nfind <word>     - Check if word exists\ncomplete <prefix> - Get completions\nhelp           - Show this message\nexit           - Quit program"
        );
        break;
      case "complete":
        let result = trie.predictWords(value);
        if (result.length > 0) {
          console.log(`Suggestions for '${value}': ${[...result].join(", ")}`);
        }
        break;
      case "exit":
        rl.close();
        console.log("Goodbye");
        return;
      default:
        console.log(
          `${value} is not a recognaized command type 'help' for more options`
        );
    }

    getInput();
  });
};
getInput();
