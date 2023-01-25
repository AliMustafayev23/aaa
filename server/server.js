const express = require('express')
const app = express()
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const cors=require("cors")
const port = 8000
const mongoose = require('mongoose');
dotenv.config()
const { Schema } = mongoose;

const courseSchema = new Schema({
  title:  String, 
  author: String,
  image:   String,
  description:String,
  price:Number,
  userimage:String,
});
const Course = mongoose.model('Course', courseSchema);
app.use(cors())
app.use(bodyParser.json())
app.get('/course', (req, res) => {
  Course.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }
  })
})
app.get('/course/:id',(req,res)=>{
    let id=req.params.id
    Course.findById(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }
    })
})
app.delete('/course/:id',(req,res)=>{
    let id=req.params.id
    Course.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("silindi")
        }
    })
})
app.post('/course', (req, res) => {
   let course=new Course({
title:  req.body.title, 
  author: req.body.author,
  image:   req.body.image,
  description:req.body.description,
  price:req.body.price,
  userimage:req.body.userimage,
   })
   course.save()
  })
mongoose.connect('mongodb+srv://Ali:Ali@cluster0.x8qec5j.mongodb.net/?retryWrites=true&w=majority',(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
});
