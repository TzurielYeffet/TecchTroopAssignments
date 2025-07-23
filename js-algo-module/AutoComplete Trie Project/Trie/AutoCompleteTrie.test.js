const AutoCompleteTrie = require("./AutoCompleteTrie");

describe("AutoCompleteTrie", () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test("addWord should add a new node to the trie", () => {
    trie.addWord("cat");
    expect(trie.children['c'].value).toBe('c');
    expect(trie.children['c'].children['a'].value).toBe('a');
    expect(trie.children['c'].children['a'].children['t'].endOfWord).toBe(true);
  });

  test("findWord should return true if word exists in the tree", () => {
    trie.addWord("cat");
    expect(trie.findWord("cat")).toBe(true);
  });

  test("findWord should return false for a prefix only", () => {
    trie.addWord("cat");
    expect(trie.findWord("ca")).toBe(false);
  });

  test("findWord should return false for a completely unknown word", () => {
    trie.addWord("cat");
    expect(trie.findWord("dog")).toBe(false);
  });

  test("predictWords should return array of completions (sorted by frequency)", () => {
    trie.addWord("cat");
    trie.addWord("car");
    trie.addWord("can");
    trie.use("cat"); 
    trie.use("cat"); 
    trie.use("car"); 

    const result = trie.predictWords("ca").map(w => w.word);
    expect(result).toEqual(["cat", "car", "can"]);
  });

  test("predictWords should return empty array for unknown prefix", () => {
    trie.addWord("cat");
    trie.addWord("dog");

    expect(trie.predictWords("br")).toEqual([]);
  });

  test("predictWords should return full word if prefix matches a word", () => {
    trie.addWord("cat");
    const result = trie.predictWords("cat").map(w => w.word);
    expect(result).toEqual(["cat"]);
  });

  test("use(word) should increment frequency for a valid word", () => {
    trie.addWord("cat");
    expect(trie.use("cat")).toBe(1);
    expect(trie.use("cat")).toBe(2);
  });

  test("use(word) should return 0 for a non-existing word", () => {
    trie.addWord("cat");
    expect(trie.use("dog")).toBe(0);
    expect(trie.use("ca")).toBe(0); 
  });
});
