const AutoCompleteTrie = require("./AutoCompleteTrie")


describe("AutoCompleteTrie", () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  
test("addNode method should add a new node to the trie",()=>{
    let trie = new AutoCompleteTrie();
    let value = "cat"
    trie.addWord(value);
    expect(trie.children['c'].value).toBe('c');
});

test("findWord should return true if word exists in the tree",()=>{
    let trie = new AutoCompleteTrie();
    let value = "cat"
    trie.addWord(value);

    expect(trie.findWord(value)).toBeTruthy();
})

test("predictWords should return an array of all possible completions if exists, outherwize return empty array",()=>{
     let trie = new AutoCompleteTrie();
    trie.addWord("cat");
    trie.addWord("car");
    trie.addWord("can");

    expect(trie.predictWords('ca')).toEqual(['cat',"car","can"]);
    expect(trie.predictWords('br')).toEqual([]);
})

  test("findWord should return false for a prefix only", () => {
    trie.addWord("cat");
    expect(trie.findWord("ca")).toBe(false);
  });

  test("findWord should return false for a completely unknown word", () => {
    trie.addWord("cat");
    expect(trie.findWord("dog")).toBe(false);
  });

  test("predictWords should return all completions for a given prefix", () => {
    trie.addWord("cat");
    trie.addWord("car");
    trie.addWord("can");
    trie.addWord("dog");

    const result = trie.predictWords("ca").sort(); 
    expect(result).toEqual(["can", "car", "cat"].sort());
  });

  test("predictWords should return an empty array for unknown prefix", () => {
    trie.addWord("cat");
    trie.addWord("dog");
    expect(trie.predictWords("br")).toEqual([]);
  });

  test("predictWords should return full words for full match prefix", () => {
    trie.addWord("cat");
    expect(trie.predictWords("cat")).toEqual(["cat"]);
  });
});