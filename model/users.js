const {Schema,model} = require('mongoose')
const users = new Schema({
    login:{
        type:String,
        require:true,
        unique:true,
    },
    name:String,
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

    })

module.exports = model("Users", users)