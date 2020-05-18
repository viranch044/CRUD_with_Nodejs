const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0-gdqux.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify:true
})


