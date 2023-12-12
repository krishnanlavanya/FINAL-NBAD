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
    origin:['http://1159.65.36.13:3000'],
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

const username = 'doadmin';
const password = process.env.MONGODB_PASSWORD; // Set this environment variable
const host = 'db-mongodb-nyc3-25322-4d7cd531.mongo.ondigitalocean.com';
const port = 27017;
const database = 'admin';

mongoose.connect(
  `mongodb+srv://${username}:${password}@${host}:${port}/${database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=>{
  console.log("connected to database")

  app.listen(port,()=>{
      console.log(`API listening to http://1159.65.36.13:3000')`)
  })
})