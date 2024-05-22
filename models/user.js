const mongoose=require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const userSchema=mongoose.Schema(
    {
        userID:{
            type:String,
            required:true,
            unique:true
        },
        name:{type:String},
        phone:{type:String},
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            
        },
        bio:{type:String},
        photoLink:{type:String},
        tokens:[
            {
                token:{
                    type:String
                }
            }
        ]
    },
    {
        timestamp:true
    }
)

userSchema.methods.toJSON=function () {
    const user=this;
    const userObject=user.toObject();
    delete userObject.tokens;
    delete userObject.password
    return userObject;
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User=mongoose.model("users",userSchema)
module.exports=User
