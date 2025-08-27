const express = require("express")
const PORT = 3000

const app = express()

app.use(logger)
app.use(counter)


app.get("/",(req,res)=>{
    res.status(200).send(JSON.stringify({message:"Welcome!",requestCount:requestCounter}))
})

app.get("/about",(req,res)=>{
    res.status(200).send(JSON.stringify({message:"about!",requestCount:requestCounter}))

})












function logger(req,res,next){
    const date = new Date().toISOString()
    console.log(`[${date}] ${req.method} ${req.url}`);
    next()

}
let requestCounter=0
function counter(req,res,next){
    requestCounter++
    req.requestCounter =requestCounter
    next()

}



app.listen(PORT,()=>{
  console.log(`Server is up and runnig on port ${PORT}`);

})