const express= require('express')
const router=new express.Router()
const User=require('../models/user')

router.post('/users',async (req,res)=>{

    const user= new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
    
})

router.get('/users', async (req,res)=>{

    try{
        const users=await User.find({})
        res.send(users)
    }
    catch(e){
        console.log(e)
        res.status(500).send()
    }
})

router.get('/users/1', async (req, res) => { 
    try {
        const user=await  User.find({"id" : "1"})
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    }
    catch(e){
        res.status(500).send()

    }
    
})

router.put('/users/1', async (req,res) =>{
    try{        
        const user=await User.findOneAndUpdate({"id" : "1"},{$set : req.body},{new: true, runValidatrs: true,useFindAndModify: false})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/1', async(req,res) =>{
    // console.log("idhr aya")
    try{
        const user= await  User.findOneAndDelete({"id" : "1"},{useFindAndModify: false})
        // console.log(user)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports = router