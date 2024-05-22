const mongoose=require('mongoose')

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

user_schema.methods.toJSON=function () {
    const user=this;
    const userObject=user.toObject();
    delete userObject.tokens;
    delete userObject.password
    return userObject;
}


const User=mongoose.model("users",userSchema)
module.exports=User
