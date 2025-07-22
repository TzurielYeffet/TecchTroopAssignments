class AutoCompleteTrie {
  constructor(value = "") {
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
    node.endOfWord = true;
  }
  findWord(word) {
    let node = this;
    for (let ch of word) {
      if (!node.children[ch]) {
        return false;
      }
      node = node.children[ch];
    }
    return node.endOfWord;
  }

  predictWords(prefix) {
    let node = this;
    for (let ch of prefix) {
      if (!node.children[ch]) {
        return [];
      }
      node = node.children[ch];
    }
    let predictArr = [];
    node._allWordsHelper(prefix, node, predictArr);
    return predictArr;
  }
  _getRemainingTree(prefix, node) {}
  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) {
      allWords.push(prefix);
    }
    for (let ch in node.children)
      this._allWordsHelper(prefix + ch, node.children[ch], allWords);
  }
}

module.exports = AutoCompleteTrie;
