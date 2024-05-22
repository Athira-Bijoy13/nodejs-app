const User = require("../models/user")

const createUser=async(req,res)=>{
   
   try {
    const user=await User(req.body)
    
    await user.save()
    res.status(200).send({
        status:"ok",
        msg:"user created",
        data:user
    })
   } catch (e) {
    res.status(400).send({
        status:"failed",
        msg:e.message
    })
   }
    

}


module.exports={
    createUser
}