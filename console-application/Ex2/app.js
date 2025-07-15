const ps = require("prompt-sync");
const prompt = ps();
let qnaArr = [
  { q: "Question 1: What is 2 + 2?", a: 4 },
  { q: "Question 2: What is the capital of France?", a: "paris" },
  { q: "Question 3: What year is it?", a: 2025 },
];
let answerArr = []
answerArr.push(Number(prompt(qnaArr[0].q+" ")));
answerArr.push(prompt(qnaArr[1].q + " "));
answerArr.push(Number(prompt(qnaArr[2].q+" ")));
let count =0;
for(let i=0;i<qnaArr.length;i++){
    if(answerArr[i] === qnaArr[i].a){
        count++;
    }
}
console.log(`Final Score: ${count}/${qnaArr.length} correct!`)
