// Ex1
class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(value) {
    if (!this.value) {
      // let newNode = new BSNode(value)
      this.value = value;
    } else if (value > this.value && this.rightChild) {
      this.rightChild.insertNode(value);
    } else if (value > this.value && !this.rightChild) {
      this.rightChild = new BSNode(value);
    } else if (value <= this.value && this.leftChild) {
      this.leftChild.insertNode(value);
    } else {
      this.leftChild = new BSNode(value);
    }
  }
  findNode(value) {
    if (!this.value) {
      console.log("false");

      return false;
    } else if (value < this.value && this.leftChild) {
      this.leftChild.findNode(value);
    } else if (value > this.value && this.rightChild) {
      this.rightChild.findNode(value);
    } else if (value === this.value) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  findCommonParent(val1, val2) {
    if(val1 === this.value || val2 === this.value){
        return this.value
    }
    if (val1 < this.value && val2 < this.value && this.leftChild) {
      return this.leftChild.findCommonParent(val1, val2);
    }
    if (val1 > this.value && val2 > this.value && this.rightChild) {
      return this.rightChild.findCommonParent(val1, val2);
    }
      return this.value;
  }

  removeNode(parent,value){
    if(this.value === value){
      if(this.rightChild && this.leftChild){
           let newNode= this.findMaxValueNode(this.leftChild)
            return newNode;
          } 

        if(this.rightChild){
            return parent.rightChild = null
        }else {
            return parent.leftChild = null
        }
    }else if(this.value > parent.value){
        this.leftChild.removeNode(this,value)
        return this
    }else{
        this.rightChild.removeNode(this,value)
        return this
      }
    return this
  }
  findMaxValueNode(node){
    if(node.rightChild){
      return node.rightChild
    }else{
      return node.leftChild
    }
  } 
}
// const letters = ["H", "E", "S", "G", "L", "Y", "I"];
// const bSTree = new BSNode();
// letters.forEach((node) => bSTree.insertNode(node));
// console.log(bSTree);
// bSTree.findNode("H"); // should print true
// bSTree.findNode("G"); // should print true
// bSTree.findNode("Z"); // should print false
// bSTree.findNode("F"); // should print false
// bSTree.findNode("y"); // should print false - we didn't make the tree case sensitive!

// Ex2
// const ex2Letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
// const ex2BSTree = new BSNode();
// ex2Letters.forEach((node) => ex2BSTree.insertNode(node));
// console.log(ex2BSTree);
// console.log(ex2BSTree.findCommonParent("B", "I")); //should return "H"
// console.log(ex2BSTree.findCommonParent("B", "G")); //should return "E"
// console.log(ex2BSTree.findCommonParent("B", "L")); //should return "J"
// console.log(ex2BSTree.findCommonParent("L", "Y")); //should return "R"
// console.log(ex2BSTree.findCommonParent("E", "H")); //should return "J"

// Ex3
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
