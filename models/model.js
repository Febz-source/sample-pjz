const mongoose=require('mongoose')
const express=require('express')
const Schema=mongoose.Schema;

const workoutSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Student',workoutSchema)
