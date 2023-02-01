const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            unique: true, 
            require: true
        },
        email:{
            type: String,
            unique: true,
            require: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/,
                'Please enter a valid email'
            ]
        },
        password:{
            type: String,
            require: true            
        }
    },
    {timestamps: true,}
)


module.exports = mongoose.model("User", userSchema);