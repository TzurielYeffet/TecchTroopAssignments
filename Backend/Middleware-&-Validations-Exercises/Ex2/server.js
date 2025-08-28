const express = require("express");
const PORT = 3000;

const userRoute = express.Router()
const app = express();
app.use("/users",userRoute)
app.use(express.json())

const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]

function validateID(req, res, next) {
  const id = req.params.id;
  console.log(id);
  
  if (isNaN(Number(id))) {
    const err = new Error("Invalid ID type");
    err.status = 400;
    return next(err);
  }
  next();
}

function checkResourceExists(req, res, next) {
  const id = Number(req.params.id);

  if (!users.some(user=> user.id === id)) {
    const error = new Error(`${id} not found`);
    error.status = 404;
    return next(error);
  } else {
    next();
  }
}

function errorCatcher(err, req, res, next) {
  console.error(`[ERROR] ${err.message}`);

  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Internal server error",
  });
}


userRoute.get("/",(req,res)=>{
    res.send(users)
})

userRoute.get("/:id",validateID,checkResourceExists,(req,res)=>{
    const id = Number(req.params.id)
    console.log(id);
    console.log(users.find(user=> user.id === id));
    
    res.send(users.find(user=> user.id === id))
})

userRoute.post("/",(req,res)=>{
    res.send("somthing")
})

app.use(errorCatcher)
app.listen(PORT, () => {
  console.log(`Server is up and runnig on port ${PORT}`);
});
