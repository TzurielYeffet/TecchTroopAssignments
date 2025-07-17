const tdd = require("./tddEx");

// {
//   food: "cherry",
//   item: "lightbulb",
//   location: "Tazmania"
// }

test("isValidSize shuold return true if the array size is 3", () => {
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let result = tdd.isValidSize(x);
  expect(result).toBe(true);
});

test("parseArrayToObject should combine two arrays into one object", () => {
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let expected = { food: "cherry", item: "lightbulb", location: "Tazmania" };
  expect(tdd.parseArrayToObject(x,y)).toEqual(expected);
});
