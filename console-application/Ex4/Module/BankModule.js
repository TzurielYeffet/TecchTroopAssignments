let balance = 100;

const checkBalance = function () {
  console.log(`balance $${balance}`);
};

const deposit = function (amount) {
  if (validatePositive(amount)) {
    balance += Number(amount);
    console.log(`New balace:$${balance}`);
  } else {
    console.log("Please enter valid amount");
  }
};
const withdraw = function (amount) {
  if (validatePositive(amount)) {
    balance -= Number(amount);
    console.log(`New balace:$${balance}`);
  } else {
    console.log("Please enter valid amount");
  }
};

const exit = function () {
  // exit(1);
};

function validatePositive(amount) {
  return amount > 0 ? true : false;
}

module.exports = { checkBalance, deposit, withdraw, exit };
