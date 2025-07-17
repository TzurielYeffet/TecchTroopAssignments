const Exercises = require("./Exercises");

describe("isEven", () => {
  test("isEven should return true if the number is even", () => {
    let ex = new Exercises();
    expect(ex.isEven(2)).toBeTruthy();
  });
  test("should return false for odd number", () => {
    const ex = new Exercises();
    expect(ex.isEven(3)).toBe(false);
  });
});

describe("removeAtLeastOne", () => {
  test("removeAtLeastOne should remove at least one element from the array `arr`", () => {
    let ex = new Exercises();
    let arr = [1, 2, 3, 4, 5];
    expect(ex.removeAtLeastOne(arr).length).toBeLessThan(5);
  });

  test("should throw or fail gracefully if input is not an array", () => {
    let ex = new Exercises();
    expect(() => ex.removeAtLeastOne("string").toThrow());
  });
});
describe("simplify", () => {
  test(`simplify should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    let ex = new Exercises();
    let str = "#asdasd!";
    expect(ex.simplify(str)).toEqual("asdasd");
  });
  test("should return the same string in no simbol present", () => {
    let ex = new Exercises();
    let str = "Hi";
    expect(ex.simplify(str)).toEqual(str);
  });
});

describe("validate", () => {
  test("validate should verify that there is at least one boolean in the array", () => {
    let ex = new Exercises();
    let arr = [1, 2, true, false, "srting"];
    expect(ex.validate(arr)).toBeTruthy();
  });
  test("should return error if no booleans are present", () => {
    const ex = new Exercises();
    const arr = [1, 2, 3];
    expect(ex.validate(arr)).toEqual({ error: "Need at least one boolean" });
  });
});
