const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    uname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        undefined:true
    },
    service:{
        type:String,
        require:true
    },
    textContent:{
        type:String
    }
})
const users=mongoose.model("users",userSchema)
module.exports = users