const express = require("express");
const PORT = 3000;

const app = express();
app.listen(PORT, () => {
  console.log(`Server is up and runnig on port ${PORT}`);
});

const wordCounter = {};

app.get("/words/:word", (req, res) => {
  const word = req.params.word;
  if (wordCounter[word]) {
    res.send(JSON.stringify({ count: wordCounter[word] }));
  } else {
    res.send(JSON.stringify({ count: 0 }));
  }
});
app.get("/sanity", (req, res) => {
  console.log("Server is up and runnig");

  res.send("Server is up and runnig");
});

app.post("/words", (req, res) => {
  const word = req.query.word;
  console.log(word);

  if (!word || word.includes(" ")) {
    res.status(403).end("Uncompatable word value");
  } else if (wordCounter[word]) {
    wordCounter[word] += 1;
    res.send(
      JSON.stringify({
        text: `Added ${word}, currentCount: ${wordCounter[word]} `,
      })
    );
    console.log(wordCounter);
  } else {
    wordCounter[word] = 1;
    res.send(
      JSON.stringify({
        text: `Added ${word}, currentCount: ${wordCounter[word]} `,
      })
    );
    console.log(wordCounter);
  }
});

app.post("/words/:sentence", (req, res) => {
  const wordsArray = req.params.sentence.toLowerCase().match(/[a-z]+/g);
  if (!wordsArray) {
    res
      .status(403)
      .send("Wrong end point, you should try the following -> /words");
  } else {
    let numNewWords = 0,
      numOldWords = 0;
    wordsArray.forEach((word) => {
      if (wordCounter[word]) {
        wordCounter[word] += 1;
        numOldWords += 1;
      } else {
        wordCounter[word] = 1;
        numNewWords += 1;
      }
    });
    res
      .status(201)
      .send({
        text: `Added ${numNewWords} words, ${numOldWords} already existed`,
      });
      console.log(wordCounter);
      
  }
});

app.delete("/words/:word",(req,res)=>{
        const word = req.params.word;
        if(wordCounter[word]){
            delete wordCounter[word]
            res.status(202).send(`${word} deleted successfuly`);
        }
        else{
            res.status(404).send(`${word} isn't in the dictionery`)
        }
})