const express= require('express')
require('./db/mongoose')

const userRouter=require('./routers/user')

const app=express()

const port=process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)


app.listen(port,()=>{
    console.log("Server is up on port"+ port)
})


// Npm Run Dev will start the server as I've changed script in package.json