const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Hi! Please register");

let inputName,inputAge,inputEmail,favoritColor;
rl.question("Please enter your name: ", (name) => {
  inputName = name;

  rl.question("Please enter your email: ", (email) => {
    inputEmail = email;

    rl.question("Please enter your age: ", (age) => {
      inputAge = age;

      rl.question("Please enter your favorite color: ", (fColor) => {
        favoriteColor = fColor;
        rl.close();

        print();
      });
    });
  });
});

const print = function () {
  console.log("Registration Summary:");
  console.log(`Name: ${inputName}`);
  console.log(`Email: ${inputEmail}`);
  console.log(`Age: ${inputAge}`);
  console.log(`Favorite Color: ${favoritColor}`);
};
