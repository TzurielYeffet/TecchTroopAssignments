function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      if (num % 7 === 0) {
        resolved("Lucky");
      } else if (num > 0) {
        resolved("Not lucky");
      } else {
        reject(Error("Invalid number"));
      }
    }, 800);
  });

  // 1. Waits 800ms (use setTimeout)
  // 2. Resolves with "Lucky!" if number is divisible by 7
  // 3. Resolves with "Not lucky" for other positive numbers
  // 4. Rejects with Error("Invalid number") if number is negative or zero
}

checkLuckyNumber(10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
