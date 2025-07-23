class AutoCompleteTrie {
  constructor(value = "") {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
    this.frequency = 0;
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
    node = this._getRemainingTree(prefix, this);
    if (!node) return [];

    let predictArr = [];
    node._allWordsHelper(prefix, node, predictArr);
    return predictArr.sort((a, b) => b.frequency-a.frequency );
  }

  use(word) {
    let node = this;
    for (let ch of word) {
      if (!node.children[ch]) return 0;
      node = node.children[ch];
    }
    if (!node.endOfWord) {
      return 0;
    }
    node.frequency += 1;
    return node.frequency;
  }

  _getRemainingTree(prefix, node) {
    for (let ch of prefix) {
      if (!node.children[ch]) {
        return null;
      }
      node = node.children[ch];
    }
    return node;
  }
  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) {
      allWords.push({ word: prefix, frequency: node.frequency });
    }
    for (let ch in node.children)
      this._allWordsHelper(prefix + ch, node.children[ch], allWords);
  }
}

module.exports = AutoCompleteTrie;
