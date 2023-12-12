const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const routes=require('./routes/route')
const usersRoute = require('./index.js');
const port=3000
// require('dotenv').config();

const app=express()

app.use(cors({
    origin:['http://localhost:4200'],
    credentials:true
}))

app.use('/', usersRoute);
app.use(cookieParser())
app.use(express.json())

app.use("/api",routes)
app.use(function(req, res, next) {
    res.status(err.status || 404).json({
      message: "No such route exists"
    })
  });
  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message
    })
  });
mongoose.connect("mongodb://127.0.0.1:27017/personal-budget-db",{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("connected to database")

    app.listen(port,()=>{
        console.log(`API listening to http://localhost:${port}`)
    })
})