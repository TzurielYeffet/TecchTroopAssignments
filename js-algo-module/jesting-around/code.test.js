const { add, calculateHyp, clearLowPriority } = require("./code");

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return the sum of the sqrt of a + b", () => {
  let sum = calculateHyp(3, 4);
  expect(sum).toBe(5);
});

test("clearLowPriority should return an array containig only Hige priority objects", () => {
  const tasks = [
    { text: "Buy groceries", priority: "HIGH" },
    { text: "Walk the dog", priority: "LOW" },
    { text: "Pay bills", priority: "HIGH" },
    { text: "Read a book", priority: "LOW" },
    { text: "Finish project report", priority: "HIGH" },
    { text: "Call mom", priority: "LOW" },
    { text: "Clean the house", priority: "HIGH" },
    { text: "Check emails", priority: "LOW" },
  ];
  let filteredArr = clearLowPriority(tasks);
  expect(filteredArr).not.toContain("LOW");
});
test("should keep only HIGH priority tasks", () => {
  let tasks = [
    { text: "dummy", priority: "HIGH" },
    { text: "dummy", priority: "LOW" },
  ];
  let filteredTasks = clearLowPriority(tasks);

  expect(filteredTasks.length).toBe(1);
  expect(filteredTasks[0].priority).toBe("HIGH");
});
