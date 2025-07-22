class AutoCompleteTrie {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
  }

  addWord(word) {
    let node = this;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new AutoCompleteTrie(ch);
      }
      node = node.children[ch];
    }
    node.endOfWord=true;
  }
  findWord(word) {
    let node = this;
    for(let ch of word){
        if(!node.children[ch]){
            return flase;
        }
        node = node.children[ch];
    }
    return node.endOfWord;    
  }

  predictWords(prefix) {}
  _getRemainingTree(prefix, node) {}
  _allWordsHelper(prefix, node, allWords) {}
}

module.exports = AutoCompleteTrie;
