class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  insertLeft(value) {
    if (!this.leftChild) {
      this.leftChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.leftChild = this.leftChild;
      this.leftChild = newNode;
    }
  }
  insertRight(value) {
    if (!this.rightChild) {
      this.rightChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.rightChild = this.rightChild;
      this.rightChild = newNode;
    }
  }
}





// console.log(`${H.rightChild.leftChild.leftChild.value}`);


// console.log(H)



class BSNode{
    constructor(value){
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(value){
        if(!this.value){
            // let newNode = new BSNode(value)
            this.value = value;
        }else if(  value >this.value && this.rightChild ){
            this.rightChild.insertNode(value)
        }else if(value > this.value && !this.rightChild){
            this.rightChild = new BSNode(value)
        }else if(  value < this.value && this.leftChild ){
            this.leftChild.insertNode(value); 
        }else{
            this.leftChild = new BSNode(value);
        }
                
    
    }
}
const H = new BSNode('H');
H.insertNode('E');
H.insertNode('S');
H.leftChild.insertNode('G');
H.rightChild.insertNode('Y');
H.rightChild.insertNode('L');
H.rightChild.leftChild.insertNode('I');

console.log(H)
