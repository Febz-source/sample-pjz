const express=require('express')
const app=express()
const cors =require("cors");
const rout=require('./router/routes')
const mongoose=require('mongoose')

app.use(cors());
app.use(express.json());
app.use('/router',rout)


const port=3010

app.get('/',(req,res)=>{
    res.send('server is listening')
})
mongoose.connect('mongodb://localhost:27017/')
.then (()=>{
    console.log('connected to mongodb')
})
.catch((err)=> console.log(err));

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})