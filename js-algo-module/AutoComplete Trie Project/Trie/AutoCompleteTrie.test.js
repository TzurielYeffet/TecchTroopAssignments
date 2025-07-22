const AutoCompleteTrie = require("./AutoCompleteTrie")

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