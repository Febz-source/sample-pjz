const express=require('express')
const mongoose=require('mongoose')
const user=require('../models/model')

const router=express.Router()

router.get('/',async(req,res)=>{
    res.send('my router');
});
router.post('/user',async(req,res)=>{
    const {name, email, age}=req.body;
    try{
        const student =await user.create({name,email,age})
        res.status(200).json(student)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

})
// get all students
router.get('/students', async (req, res) => {
  const students = await user.find();
  res.status(200).json(students);  // sends data back to frontend
});
module.exports=router