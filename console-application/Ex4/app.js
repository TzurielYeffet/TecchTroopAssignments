const { stdin, stdout } = require("process");
const Bank = require("./Module/BankModule");
const readline = require("readline");
const { log } = require("console");

const bank = Bank;
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function menu() {
  console.log(
    "\n=== Banking System ===\n1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit"
  );
  rl.question("Choose option (1-4): ", (num) => {
    let inputNum = num;
    if (validateInput(inputNum)) {
      switch (inputNum) {
        case "1":
          bank.checkBalance();
          menu();
          break;
        case "2":
          rl.question("Enter amount to deposit: $", (amount) => {
            bank.deposit(amount);
            menu();
          });
          break;
        case "3":
          rl.question("Enter amount to withdraw: $", (amount) => {
            bank.withdraw(amount);
            menu();     
          });
          break;
        case "4":
          console.log("Bye Bye");
          rl.close();
          break;
        default:
          menu();
      }
    }else{
      console.log("Invalid Input Try again");
      menu();
      
    }
  });
}
function validateInput(input) {
  if (input > 0 && input <= 4) {
    return true;
  }
  return false;
}
menu();